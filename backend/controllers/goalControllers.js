const asyncHandler = require('express-async-handler')

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoal = asyncHandler(async (req,res)=>{
    res.status(200).json({message : 'Get Goals'})
})
// @desc Set Goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req,res)=>{
    //Check if user doesnt send body message, if so send error
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
        
    }
    res.status(200).json({message:'Set Goals'})
})
// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req,res)=>{
    res.status(200).json({message : `Update goal ${req.params.id}`})
})
// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req,res)=>{
    res.status(200).json({message : `Delete goal ${req.params.id}`})
})

//export your functionality to get routed back to the frontend
module.exports = {
    getGoal, setGoal, updateGoal, deleteGoal,
}