const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    Question: {
        type: String,
        required: true, 
    },
    postedAt: {
       type: Date,
       default: Date.now, 
    },
    user:{
        type: String,
    }
});

mongoose.model('Question',QuestionSchema);