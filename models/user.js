const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const userSchema = new  mongoose.Schema({ // qui '_id è serialz'
    email : {type: String, required:true, unique: true},
    password:{type: String , required: true}
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);