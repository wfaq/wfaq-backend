const {Schema, model} = require("mongoose");

const QuestionSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    Question: {
        type: String,
        required: true, 
    },
    user:{
        type: String,
    }
}, {
    timestamps: true,
});

module.exports = model('Question', QuestionSchema);