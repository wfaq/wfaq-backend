const question = require("../models/questions");

module.exports = {
  async index(req, res) {
 // const { search } = req.body;
  const questions = await question.find({"title":{ $regex: `.*${req.body.search}.*`}});
    return res.status(200).json(questions);
  },
} 