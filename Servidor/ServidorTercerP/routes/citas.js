var express = require('express');
var router = express.Router();
var citas = require('../controllers/citas.controller');
var auth = require('../controllers/auth.controller');

/* GET home page. */
router.get('/mostrarTodas', citas.mostrarTodas);

router.post('/agregar', citas.agregar);

router.delete('/eliminar/:id', citas.eliminar);

router.put('/modificar/:id', citas.modificar);

module.exports = router;
