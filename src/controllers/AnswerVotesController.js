const question = require("../models/questions");

module.exports = {
  async up(req, res) {
    const { id, answerId } = req.params;

    const qst = await question.findOne({ _id: id });

    const { upVotes, downVotes } = qst.answers.find(
      answer => answer.id === answerId
    );

    const userAlreadyVotedUp = upVotes.find(voto => voto === req.userid);

    if (userAlreadyVotedUp) {
      return res.status(400).json({ error: "User already voted up" });
    }

    const userAlreadyVotedDown = downVotes.findIndex(
      voto => voto === req.userid
    );
    console.log(userAlreadyVotedDown);
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

    const userAlreadyVotedDown = downVotes.find(voto => voto === req.userid);

    if (userAlreadyVotedDown) {
      return res.status(400).json({ error: "User already voted up" });
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
