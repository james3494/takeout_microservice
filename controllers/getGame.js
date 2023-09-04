// TODO: add error handling - i.e who can access this?
// which fields to return?

module.exports = {
  buildGetGame({ filterGames, throwError, getLoggedIn }) {
    return async function (httpRequest) {
      const { ...filters } = httpRequest.query;
      const { _id } = httpRequest.params;
      const loggedInId = getLoggedIn()._id;

      let filterObj = {};
      if (_id) {
        filterObj = { _id };
      } else filterObj = filters;

      const filtered = await filterGames(filterObj);
      let body = filtered
        .filter((game) => game.players.includes(loggedInId))
        .map((game) => ({
          _id: game._id,
        }));

      if (_id) {
        if (body.length < 1) {
          throwError({
            status: 404,
            title: "game not found with specified id",
            error: "game-not-found"
          })
        }
        body = body[0];
      }

      return {
        headers: { "Content-Type": "application/json" },
        status: 200,
        body,
      };
    };
  },
};