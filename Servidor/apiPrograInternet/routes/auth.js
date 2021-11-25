var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth.controller');

router.get('/sign', auth.getJwtToken);

module.exports = router;