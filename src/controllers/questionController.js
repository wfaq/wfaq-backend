const question = require("../models/questions");

module.exports = {
  async index(req, res) {
    const questions = await question.find();

    return res.status(200).json(questions);
  },

  async show(req, res) {
    const { _id } = req.params;
    const questions = await question.find({ _id });

    return res.status(200).json(questions);
  },

  async create(req, res) {
    const qst = await question.create(req.body);

    return res.status(201).json(qst);
  },

  async update(req, res) {
    const { id } = req.params;
    const qst = await question.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(202).json(qst);
  },

  async destroy(req, res) {
    const { id } = req.params;
    await question.findByIdAndRemove(id);

    return res.sendStatus(204);
  }
};
