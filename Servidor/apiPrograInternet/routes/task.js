var express = require('express');
var router = express.Router();
var task = require('../controllers/task.controller');


/* GET home page. */
router.get('/list', task.taskList);

router.post('/new', task.newTask);

router.post('/update', task.updateTask);

router.post('/delete', task.deleteTask);

module.exports = router;
