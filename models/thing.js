const mongoose = require('mongoose')

const thingSchema = new  mongoose.Schema({ // qui '_id è serialz'
    title: {type: String, required:true},
    description:{type: String, required:true},
    image: {type: String, required:true},
    valore:{type: Number, required:true},
    userId: {type: String, required:true}
});
module.exports = mongoose.model('Thing', thingSchema);