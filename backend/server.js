//add backend framework so things can be used on any page
const express = require('express')
//add mondoose
const connectDb = require('./config/db')
const colors = require('colors')
//Set env variables
const  dotenv = require('dotenv').config()
//Designate port # to server
const port = process.env.PORT || 5000

connectDb()
//Initialize express
const app = express()
//Bring in error handlers
const {errorHandler} = require('./middleware/errorMiddleware')
//<---Add middleware--->
app.use(express.json())
app.use(express.urlencoded({extended : false}))

//access express router to respond to the request coming from the front-end
app.use('/api/goals', require('./routes/goalRoutes'))
//runs after to catch the errors sent to the server
app.use(errorHandler)
//Call app function to listen on port
app.listen(port, () => console.log(`Server started on port: ${port}`))