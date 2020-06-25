const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const service_user = require('../services/service-user')

//this function will authenticate user 
const authenticateUser = async (room, password, done) => {
    const user = await service_user.findByRoom(room)
    //user not present
    if(user === null) {
        console.log('User not found')
        return done(null, false, {
            message: 'No user with room : ' + room
        })
    }

    //if user is present
    try {
        //compare its password
        if(await bcrypt.compare(password, user.password)) {
            return done(null, user)
        }
        else {
            console.log('Password doesn\'t match')
            return done(null, false, {
                message: 'Incorrect Password'
            })
        }
    }
    catch(e) {
        //in case of any other error return that error
        done(e)
    }
}

const initialize = (passport) => {
    //will set that authentication is done by comparing apartmentNo
    passport.use(new localStrategy({
        usernameField: 'apartmentNo'
    }, authenticateUser))
    //serializing and deserializing user
    passport.serializeUser((user, done) => {
        return done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        return done(null, service_user.findById(id))
    })
}

module.exports = initialize