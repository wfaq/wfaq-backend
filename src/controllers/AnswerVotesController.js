const question = require("../models/questions");

module.exports = {
  async up(req, res) {
    const { id, answerId } = req.params;

    const qst = await question.findOne({ _id: id });

    const { upVotes, downVotes } = qst.answers.find(
      answer => answer.id === answerId
    );

    const userAlreadyVotedUp = upVotes.findIndex(voto => voto === req.userid);

    if (userAlreadyVotedUp >= 0) {
      upVotes.splice(userAlreadyVotedUp, 1);
      qst.save();
      return res.status(204).send();
    }

    const userAlreadyVotedDown = downVotes.findIndex(
      voto => voto === req.userid
    );

    if (userAlreadyVotedDown >= 0) {
      downVotes.splice(userAlreadyVotedDown, 1);
    }

    upVotes.push(req.userid);

    qst.save();
    return res.status(204).send();
  },

  async down(req, res) {
    const { id, answerId } = req.params;

    const qst = await question.findOne({ _id: id });

    const { upVotes, downVotes } = qst.answers.find(
      answer => answer.id === answerId
    );

    const userAlreadyVotedDown = downVotes.findIndex(
      voto => voto === req.userid
    );

    if (userAlreadyVotedDown >= 0) {
      downVotes.splice(userAlreadyVotedDown, 1);
      qst.save();
      return res.status(204).send();
    }

    const userAlreadyVotedUp = upVotes.findIndex(voto => voto === req.userid);

    if (userAlreadyVotedUp >= 0) {
      upVotes.splice(userAlreadyVotedUp, 1);
    }

    downVotes.push(req.userid);

    qst.save();
    return res.status(204).send();
  }
};
