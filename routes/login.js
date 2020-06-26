const express = require('express')
const router = express.Router()
const json = require('body-parser').json()

const dotenv = require('dotenv')
dotenv.config()

const passport = require('passport')

//logout route
router.delete('/logout', (req, res) => {
    req.logOut()

    console.log('Logout Successful')
    res.send(true)
})

//login route
router.post('/login', json, passport.authenticate('local'), (req, res) => {
    console.log('login successful')
    res.send(true)
})

module.exports = router