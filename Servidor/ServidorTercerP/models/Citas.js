const mongoose = require('mongoose');
const { Schema } = mongoose;

const Cita = new Schema({
    title: String,
    description: String,
    date: String, 
    time: String,
    applicant: String
});

module.exports = mongoose.model('Cita', Cita);