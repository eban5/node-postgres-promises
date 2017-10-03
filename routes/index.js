var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/goals', db.getAllGoals);
router.get('/api/goals/:id', db.getSingleGoal);
router.get('/api/projects', db.getAllProjects);
router.get('/api/projects/:id', db.getSingleProject);
router.get('/api/objectives', db.getAllObjectives);
router.get('/api/objectives/:id', db.getSingleObjective);
router.get('/api/actions', db.getAllActions);
router.get('/api/actions/:id', db.getSingleAction);
// router.post('/api/puppies', db.createPuppy);
// router.put('/api/puppies/:id', db.updatePuppy);
// router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;

