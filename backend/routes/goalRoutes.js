//Each resource in the api will have its own Route file.
//Bring express in, to use the express router
const express = require('express')
//router object lets you organize your responces and how they work
const router = express.Router()
//bring function from controllers
const {getGoal, setGoal, updateGoal, deleteGoal} = require('../controllers/goalControllers')

const {protect} = require('../middleware/authMiddleware')

//Route different responses back to the server.js file 


// router.get('/',getGoal)
// router.post('/',postGoal)
router.route('/').get(protect, getGoal).post( protect, setGoal)
router.route('/:id').delete( protect, deleteGoal).put(protect, updateGoal)
// router.put('/:id',updateGoal)
// router.delete('/:id',deleteGoal)


//export info to server from router
module.exports = router