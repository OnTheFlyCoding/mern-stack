//Defining the fields of our resources. Text fields, time stamps, IDs
//Added user field from userSchema
const mongoose = require('mongoose')
const goalSchema = mongoose.Schema({
    //Add a user field. Allows user to be associated with a specific goal
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true, 'Please add a text field.']
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)