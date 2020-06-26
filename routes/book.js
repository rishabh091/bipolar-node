const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const service_booking = require('../services/service-book')

router.use(cors('http://localhost:4200/book'))

router.post('/book', json, (req, res) => {
    //save data
    const result = service_booking.book(req.body)

    if (result) {
        res.status(200)
        res.send(true)
    } else {
        res.status(400)
        res.send(false)
    }
})

module.exports = router