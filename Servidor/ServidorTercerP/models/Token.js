const mongoose = require('mongoose');
const { Schema } = mongoose;

const Token = new Schema({
    token: String
});

module.exports = mongoose.model('Token', Token);