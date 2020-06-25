const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    apartmentNo: Number,
    name: String,
    password: String
})

const User = mongoose.model('User', schema)

module.exports = User