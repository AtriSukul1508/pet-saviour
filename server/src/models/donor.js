const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    animalType: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('donor', donorSchema);