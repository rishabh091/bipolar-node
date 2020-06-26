const express = require('express')
const router = express.Router()
const json = require('body-parser').json()
const cors = require('cors')

const userService = require('../services/service-user')

const corsConfig = {
    origin: (origin, callback) => {
        let list = ['https://bipolar-test.web.app/signup', 'http://localhost:4200/signup']

        if(list.indexOf(origin) !== -1) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed By cors'))
        }
    }
}
router.use(cors(corsConfig))

router.post('/signup', json, (req, res) => {
    const data = req.body

    userService.save(data)
    .then((result) => {
        console.log('User saved')

        res.status(200)
        res.send(true)
    })
    .catch((err) => {
        console.log(err)

        res.status(501)
        res.send(false)
    })
})

module.exports = router