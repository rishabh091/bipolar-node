const express = require('express')
const router = express.Router()
const cors = require('cors')
const json = require('body-parser').json()

const dotenv = require('dotenv')
dotenv.config()

const passport = require('passport')

//setting up login cors
const corsConfig = {
    origin: (origin, callback) => {
        let list = ['https://bipolar-test.web.app/', 'http://localhost:4200/', 'https://bipolar-test.web.app/book/']

        if(list.indexOf(origin) !== -1) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed By cors'))
        }
    }
}
router.use(cors(corsConfig))

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