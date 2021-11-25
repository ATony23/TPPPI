const apiRoute = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");
/**
 * This function retrieve all pokemons info
 * @param {*} req 
 * @param {*} res 
 */
async function pokemonList(req, res) {

    try {
        const response = await axios.get(`${apiRoute}?limit=150`);

        if (response.data && response.data.results) {
            return res.status(200).json({ "success": true, "data": response.data.results });
        } else {
            return res.status(200).json({ "success": true, "data": [] });
        }
    } catch (err) {
        return res.status(500).json({ "success": false });
    }
}

/**
 * This function retrieve the information of an specific pokemon
 * @param {*} req 
 * @param {*} res 
 */
async function pokemonInfo(req, res) {

    const pokemonName = req.query.pName;

    if (!pokemonName) return res.status(400).json({ "success": false, "message": "Pokemon name required" });

    try {
        const response = await axios.get(`${apiRoute}/${pokemonName}`);

        if (response.data) {
            return res.status(200).json({ "success": true, "data": response.data });
        } else {
            return res.status(200).json({ "success": true, "data": [] });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ "success": false });
    }
}

module.exports = {
    pokemonList,
    pokemonInfo
}