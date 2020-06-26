const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

const dotenv = require('dotenv')
dotenv.config()

const service_booking = require('../services/service-book')

router.post('/book', json, (req, res) => {
    //save data
    service_booking.book(req.body)
    .then((result) => {
        console.log(result)

        if (result) {
            res.status(200)
            res.send(true)
        } else {
            res.status(401)
            res.send(false)
        }})
        .catch((err) => {
            console.log(err)

            res.status(401)
            res.send(false)
        })
})

module.exports = router