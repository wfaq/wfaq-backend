const question = require("../models/questions");

module.exports = {
    async store(req, res) {
        const { id } = req.params;
        const qst = await question.findOne({ _id: id });
        const { tags } = qst;
        let newTags = [];
        newTags =  req.body.tags.slice();

        newTags.map(function(item) {
           tagAlreadyIn = tags.findIndex(tag => tag === item);
           if (!tagAlreadyIn) {
            tags.push(item);
            qst.save();
           };
        });

        return res.status(201).json(qst);
      },

      async destroy(req, res) {
        const { id, tag } = req.params;

        const qst = await question.findOne({ _id: id });

        const tagIndex = qst.tags.findIndex(tag => qst.tags === tag);

        qst.answers.splice(tagIndex, 1);

        qst.save();


        return res.status(204).send();
      }

}