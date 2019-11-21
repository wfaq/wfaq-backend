const mongoose = require('mongoose');
require('../models/questions');
const Question = mongoose.model('Question');



module.exports = {
    async index(req,res){
        // const questions  = await Question.find();
        
        // return res.json(questions);
        return res.send('A ser implementamo modulo de produtos');
    },
}