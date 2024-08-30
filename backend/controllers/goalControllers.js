const asyncHandler = require('express-async-handler')
//Instance for mongoose models to prefrom tasks
const Goal = require('../models/goalModel')
// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoal = asyncHandler(async (req,res)=>{
    const goal = await Goal.find({})
    //waiting to retrieve data in the form of an obj.
    res.status(200).json(goal)
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
    //If text field given: excute the following
    // create a goal using the users input
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
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