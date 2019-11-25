const question = require("../models/questions");

module.exports = {
  async store(req, res) {
    const { id } = req.params;
    const qst = await question.findOne({ _id: id });
    const { answers } = qst;
    answers.push(req.body);
    qst.save();
    return res.status(201).json(qst);
  },

  async update(req, res) {
    const { id, answerId } = req.params;
    const { newanswer } = req.body;

    const qst = await question.findOne({ _id: id });

    const answer = qst.answers.find(answer => answer.id === answerId);

    answer.answer = newanswer;

    qst.save();

    return res.status(202).json(qst);
  },

  async destroy(req, res) {
    const { id, answerId } = req.params;

    const qst = await question.findOne({ _id: id });

    const answer = qst.answers.findIndex(answer => qst.answers.id === answerId);

    qst.answers.splice(answer, 1);

    qst.save();
    return res.status(204).send();
  }
};
