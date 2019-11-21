const router = require('express').Router();

const QuestionController = require("../controllers/questionController");

router.get("/", QuestionController.index);
router.post("/", QuestionController.create);
router.put("/:id", QuestionController.update);
router.delete("/:id", QuestionController.destroy);

module.exports = router;