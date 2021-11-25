var express = require('express');
var router = express.Router();
var prueba = require('../controllers/prueba.controller');

/* GET home page. */
router.get('/t', prueba.saludo);

module.exports = router;
