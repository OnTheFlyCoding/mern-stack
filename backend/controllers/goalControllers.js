// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoal = ((req,res)=>{
    res.status(200).json({message : 'Get Goals'})
})
// @desc Set Goals
// @route POST /api/goals
// @access Private
const postGoal = ((req,res)=>{
    res.status(200).json({message:'Set Goals'})
})
// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = ((req,res)=>{
    res.status(200).json({message : `Update goal ${req.params.id}`})
})
// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = ((req,res)=>{
    res.status(200).json({message : `Delete goal ${req.params.id}`})
})

//export your functionality to get routed back to the frontend
module.exports = {
    getGoal, postGoal, updateGoal, deleteGoal,
}