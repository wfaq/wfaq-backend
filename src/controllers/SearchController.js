const question = require("../models/questions");

module.exports = {
  async index(req, res) {
    console.log(req.query.search);
    const questions = await question.find({
      title: { $regex: `.*${req.query.search}.*`, $options: "i" }
    });
    return res.status(200).json(questions);
  }
};
