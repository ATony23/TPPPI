var express = require('express');
var router = express.Router();
var operations = require('../controllers/operations.controllers');
var auth = require('../controllers/auth.controller');


/* GET home page. */
router.get('/', auth.verifyToken, operations.operationList);

router.get('/suma', operations.suma);

router.post('/resta', operations.resta);

router.get('/multiplicacion/:valor1/:valor2', operations.multiplicacion);

router.post('/division', operations.division);

module.exports = router;
