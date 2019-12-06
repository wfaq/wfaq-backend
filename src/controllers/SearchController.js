const question = require("../models/questions");

module.exports = {
  async index(req, res) {
    const questions = await question.find({
      $or: [
        { title: { $regex: `.*${req.query.search}.*`, $options: "i" } },
        { question: { $regex: `.*${req.query.search}.*`, $options: "i" } }
      ]
    });
    return res.status(200).json(questions);
  }
};
