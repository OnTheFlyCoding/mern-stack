//Defining the fields of our resources. Text fields, time stamps, IDs
const mongoose = require('mongoose')
const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text field.']
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)