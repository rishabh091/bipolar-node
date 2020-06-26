const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    apartmentNo: Number,
    start: Date,
    end: Date,
    facility: String
})

const Booking = mongoose.model('Booking', schema)

module.exports = Booking