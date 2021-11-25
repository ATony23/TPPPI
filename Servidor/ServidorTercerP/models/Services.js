const mongoose = require('mongoose');
const { Schema } = mongoose;

const Services = new Schema({
    title: String,
    description: String,
    manager: String
});

module.exports = mongoose.model('Servicio', Services);