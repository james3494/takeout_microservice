

module.exports = {
    buildMakeHit ({ Id, throwError }) {
     return function makeHit ({
       chaserId,
       targetId,
       gameId,
       hitMethodId,
       status = 'awaiting',
       createdOn = Date.now(),
       _id = Id.makeId(),
     } = {}) {

       if (!Id.isValidId(_id)) {
          throwError('Hit must have a valid id.');
       }
       if (!Id.isValidId(chaserId)) {
          throwError('chaser must have a valid id.');
        }
        if (!Id.isValidId(targetId)) {
          throwError('target must have a valid id.');
        }
        if (!Id.isValidId(gameId)) {
          throwError('Game must have a valid id.');
        }
        if (!Id.isValidId(hitMethodId)) {
          throwError('hitMethod must have a valid id.');
        }
        if (typeof createdOn !== 'number' || createdOn > Date.now()) {
          throwError('createdOn must be a number and in the past.', 400);
        }
        if (!['awaiting', 'inProgress', 'success', 'fail'].includes(status)) {
          throwError(`${status} is not a valid status.`);
        }

       return Object.freeze({
         getCreatedOn: () => createdOn,
         getId: () => _id,
         getStatus: () => status,
         getHitMethodId: () => hitMethodId,
         getGameId: () => gameId,
         getChaserId: () => chaserId,
         getTargetId: () => targetId,
         getAll: () => ({
           createdOn,
           _id,
           status,
           hitMethodId,
           gameId,
           chaserId,
           targetId
         })
       });


     };
   }
  };
