//add backend framework
const express = require('express')
//Set env variables
const  dotenv = require('dotenv').config()
//Designate port # to server
const port = 5000
//Initialize express
const app = express()
//Call app function to listen on port
app.listen(port, () => console.log(`Server started on port: ${port}`))