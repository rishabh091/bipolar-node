const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const service_booking = require('../services/service-book')

const corsConfig = {
    origin: (origin, callback) => {
        let list = ['https://bipolar-test.web.app', 'http://localhost:4200/book']

        if(list.indexOf(origin) !== -1) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed By cors'))
        }
    }
}
router.use(cors(corsConfig))

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