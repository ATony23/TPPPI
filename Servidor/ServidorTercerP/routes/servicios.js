var express = require('express');
var router = express.Router();
var servicios = require('../controllers/servicios.controller');

/* GET home page. */
router.get('/mostrarTodos', servicios.mostrarTodos);

router.post('/agregar', servicios.agregar);

router.delete('/eliminar/:id', servicios.eliminar);

router.put('/modificar/:id', servicios.modificar);

module.exports = router;
