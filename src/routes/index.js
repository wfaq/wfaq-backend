const router = require("express").Router();

const QuestionController = require("../controllers/questionController");

router.get("/", (req, res) => {
  res.status(200).json({ app: "wFaq-backend", version: "0.0.1" });
});

router.get("/questions",QuestionController.index);

// require('../models/questions');

module.exports = router;
