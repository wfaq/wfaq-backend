const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function generateToken(params = {}) {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: 86400
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await Users.create(req.body);
      user.password = undefined;

      return res.status(201).send({
        user,
        token: generateToken({ id: user.id })
      });
    } catch (error) {
      return res.status(400).send({ error });
    }
  },
  async authenticate(req, res) {
    try {
      const { email, password } = req.body;

      // verifica se existe um usuario cadastrado com o e-mail enviado
      const user = await Users.findOne({ email }).select("+password");

      if (!user) {
        return res.status(400).send({ error: "User not found!" });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({ error: "Invalid password!" });
      }

      // se chegou aqui, passou pelas verificações o token pode ser gerado

      user.password = undefined;

      return res.status(200).send({
        user,
        token: generateToken({ id: user.id })
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};
