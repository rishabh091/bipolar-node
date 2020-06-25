const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

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
app.use(signup)
app.use(login)


//starting server
const server = app.listen(process.env.PORT | 8080, () => {
    console.log('PORT : ' + server.address().port)
})