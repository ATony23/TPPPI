var express = require('express');
var router = express.Router();
var saludo = require('../controllers/prueba.controller');

/* GET home page. */
router.get('/saludo', saludo.saludar);

module.exports = router;
