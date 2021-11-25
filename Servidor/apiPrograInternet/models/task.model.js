const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }
);

const Services = mongoose.model('Service', servicesSchema);

module.exports = Services;