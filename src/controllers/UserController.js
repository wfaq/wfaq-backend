const User = require("../models/Users");

module.exports = {
  async index(req, res) {
    const Users = await User.find();

    return res.status(200).json(Users);
  },

  async create(req, res) {
    console.log(req.body);
    const user = await User.create(req.body);
    // implementar criptografica na senha, a verificar

    return res.status(201).json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const Users = await User.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(202).json(Users);
  },

  async destroy(req, res) {
    const { id } = req.params;
    await User.findByIdAndRemove(id);

    return res.sendStatus(204);
  }
};

//a
