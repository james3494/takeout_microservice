const request = require("supertest");
const { app } = require("../server.js");
const populateDb = require("./populateDb.js");

const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;

const checkBody = (testBody, resBody) => {
  Object.entries(testBody || {}).forEach(([key, value]) => {
    if (typeof value == "object")
      expect(resBody[key]).to.deep.equalInAnyOrder(value);
    else expect(resBody[key]).to.be.equal(value);
  });
};

const executeTest = (test) => {
  test.send = test.send || {};
  test.expect = test.expect || {};

  it(test.should, (done) => {
    populateDb(test.data).then(() => {
      request(app)
        [test.method](`${process.env.PATH_ROUTE}/${test.endpoint}`)
        .send(test.send.body)
        .query(test.send.query)
        .set(
          "X-Api-Key",
          test.send.apiKey === undefined
            ? process.env.API_KEY
            : test.send.apiKey
        )
        .set("X-Current-User", JSON.stringify(test.send.loggedInUser || null))
        .set("Content-Type", "application/json")
        .end((error, res) => {
          try {
            if (test.expect.statusCode)
              expect(res.statusCode).to.be.equal(test.expect.statusCode);
            if (test.expect.body) checkBody(test.expect.body, res.body);
          } catch (err) {
            // print res.body in the case of a failed response
            console.log("Response body: ");
            console.log(res ? res.body : "no response body");
            // print res.error in the case of a failed response
            console.log("Response error: ");
            console.log(res ? res.error : "no response error");
            throw err;
          }
          done();
        });
    });
  });
};

module.exports = (tests) => {
  tests.forEach((test) => executeTest(test));
};
