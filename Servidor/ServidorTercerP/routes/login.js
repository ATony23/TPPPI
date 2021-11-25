var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth.controller');

/* GET home page. */
router.get('/login', auth.getJwtToken);

module.exports = router;
