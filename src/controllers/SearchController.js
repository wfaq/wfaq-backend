const question = require("../models/questions");

module.exports = {
  async index(req, res) {
    const { search } = req.query;

    if (!search) {
      return res.status(400).json({ message: "Empty Question" });
    }

    const questions = await question.find({
      $or: [
        { title: { $regex: `.*${search}.*`, $options: "i" } },
        { question: { $regex: `.*${search}.*`, $options: "i" } }
      ]
    });

    return res.status(200).json(questions);
  }
};
