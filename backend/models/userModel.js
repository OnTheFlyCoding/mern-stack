//Resources for users, in order to correctly associate data
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, 'Please add your name']
    },
    email:{
        type: String,
        require: [true, 'Please add your email']
    },
    password:{
        type: String,
        require: [true, 'Please add a password']
    },
},
{
    timestamps: true,
}
)
module.exports = mongoose.model('User', userSchema)