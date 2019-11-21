const router = require("express").Router();
const questionRoutes = require('./questionRoutes');

router.use('/questions', questionRoutes);
router.get("/", (req, res) => {
  res.status(200).json({ app: "wFaq-backend", version: "0.0.1" });
});

// require('../models/questions');

module.exports = router;
