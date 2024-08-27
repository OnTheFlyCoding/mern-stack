//Each resource in the api will have its own Route file.
//Bring express in, to use the express router
const express = require('express')

const router = express.Router()
//listen for api requests and respond with info
//Route response back to the server.js file
router.get('/',(req,res) =>{
    res.status(200).json({message : 'Get Goals'})
})

module.exports = router