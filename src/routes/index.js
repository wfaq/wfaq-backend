const router = require("express").Router();
const questionRoutes = require('./questionRoutes');
const UsersRouters = require('./usersRouters');

router.use('/questions', questionRoutes);
router.use('/users',UsersRouters);

router.get("/", (req, res) => {
  res.status(200).json({ app: "wFaq-backend", version: "0.0.1" });
});

// require('../models/questions');

module.exports = router;
