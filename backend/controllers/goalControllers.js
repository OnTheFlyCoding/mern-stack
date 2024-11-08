//functions for goals
const asyncHandler = require('express-async-handler')
//Instance for mongoose models to prefrom tasks
const Goal = require('../models/goalModel')
const User = require('../models/userModel')
// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoal = asyncHandler(async (req,res)=>{

    const goals = await Goal.find({user: req.user.id})
    //waiting to retrieve data in the form of an obj.
    res.status(200).json(goals)
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
    const goal = await Goal.create({
        text: req.body.text,
        //need to add user after authorization step
        user: req.user.id,
    })
    res.status(200).json(goal)
})
// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req,res)=>{

    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error ('Goal not found')
    }

    //check for a user to associate with
    if(!req.user){
        res.status(401)
        throw new Error('User Not Found')
    }
    //Make sure the logged in user(user.id) matches the goal user.
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,

    })
    res.status(200).json(updatedGoal)
})
// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    console.log(goal)
    if(!goal){
        res.status(400)
        throw new Error('No Goal found with that ID')
    }
    //check for a user to associate with
    if(!req.user){
        res.status(401)
        throw new Error('User Not Found')
    }
    //Make sure the logged in user(user.id) matches the goal user.
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not authorized')
    }
    
    await goal.deleteOne()
    res.status(200).json({id:req.params.id})
})

//export your functionality to get routed back to the frontend
module.exports = {
    getGoal, setGoal, updateGoal, deleteGoal,
}