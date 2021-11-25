var express = require('express');
var router = express.Router();

const { pokemonInfo, pokemonList } = require('../controllers/pokemon.controller');

router.get('/', pokemonList);

router.get('/poke', pokemonInfo);

module.exports = router;