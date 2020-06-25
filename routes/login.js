const express = require('express')
const router = express.Router()
const cors = require('cors')
const json = require('body-parser').json()

const dotenv = require('dotenv')
dotenv.config()

const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

//one initialize we made to authenticate and authorize user
const passport_config = require('../config/passport.config')
passport_config(passport)

//setting up login cors
router.use(cors('http://localhost:4200/login'))
//setting session, passport and flash for router
router.use(flash())
router.use(session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false
}))
router.use(session())
//automated generated initialize
router.use(passport.initialize())

//logout route
router.delete('/logout', (req, res) => {
    req.logOut()
    res.send('logout sucessful')
})

//login route
router.post('/login', json, passport.authenticate('local'), (req, res) => {
    res.send('Authorized')
})

module.exports = router