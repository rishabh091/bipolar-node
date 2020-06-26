const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

//setting session, passport and flash for router
//one initialize we made to authenticate and authorize user
const passport_config = require('./config/passport.config')
passport_config(passport)

app.use(flash())
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false
}))
//automated generated initialize
app.use(passport.initialize())

//connect to mongoose
const url = 'mongodb+srv://Rishabh:' + process.env.PASSWORD + '@cluster0-ands8.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((res) => {
    console.log('Successfully connected with MongoDB Atlas')
})
.catch((err) => {
    console.log(err)
})

//getting routes to integrate in express main app
const signup = require('./routes/signup')
const login = require('./routes/login')
const book = require('./routes/book')
app.use(signup)
app.use(login)
app.use(book)


//starting server
const server = app.listen(process.env.PORT | 8080, () => {
    console.log('PORT : ' + server.address().port)
})