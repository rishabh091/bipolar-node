const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

const userService = require('../services/service-user')


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