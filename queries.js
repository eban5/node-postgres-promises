var promise = require('bluebird');
var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/activiti';
var db = pgp({connectionString});

function getAllGoals(req, res, next) {
  db.any('select * from goals')
    .then(function (data) {
      res.status(200)
        .json({
          // status: 'success',
          data: data
          // message: 'Retrieved ALL goals'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleGoal(req, res, next) {
  var goalID = parseInt(req.params.id);
  db.one('select * from goals where id = $1', goalID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE goal'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllProjects(req, res, next) {
  db.any('select * from projects')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL projects'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleProject(req, res, next) {
  var projectID = parseInt(req.params.id);
  db.one('select * from projects where uid = $1', projectID)
    .then(function (data) {
      console.log(data['name'])
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE project'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllObjectives(req, res, next) {
  db.any('select * from objectives')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL objectives'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleObjective(req, res, next) {
  var objectiveID = parseInt(req.params.id);
  db.one('select * from objectives where id = $1', objectiveID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE objective'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllActions(req, res, next) {
  db.any('select * from actions')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL actions'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleAction(req, res, next) {
  var actionID = parseInt(req.params.id);
  db.one('select * from actions where id = $1', actionID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE action'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

// function createPuppy(req, res, next) {
//   req.body.age = parseInt(req.body.age);
//   db.none('insert into pups(name, breed, age, sex)' +
//       'values(${name}, ${breed}, ${age}, ${sex})',
//     req.body)
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Inserted one puppy'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

// function updatePuppy(req, res, next) {
//   db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
//     [req.body.name, req.body.breed, parseInt(req.body.age),
//       req.body.sex, parseInt(req.params.id)])
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Updated puppy'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

// function removePuppy(req, res, next) {
//   var pupID = parseInt(req.params.id);
//   db.result('delete from pups where id = $1', pupID)
//     .then(function (result) {
//       /* jshint ignore:start */
//       res.status(200)
//         .json({
//           status: 'success',
//           message: `Removed ${result.rowCount} puppy`
//         });
//       /* jshint ignore:end */
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }


module.exports = {
  getAllGoals: getAllGoals,
  getSingleGoal: getSingleGoal,
  getAllProjects: getAllProjects,
  getSingleProject: getSingleProject,
  getAllObjectives: getAllObjectives,
  getSingleObjective: getSingleObjective,
  getAllActions: getAllActions,
  getSingleAction: getSingleAction
};
