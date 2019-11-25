const router = require("express").Router();

const QuestionController = require("../controllers/questionController");
const AnswerController = require("../controllers/AnswerController");

router.get("/", QuestionController.index);
router.post("/", QuestionController.create);
router.put("/:id", QuestionController.update);
router.delete("/:id", QuestionController.destroy);

router.post("/:id/answers", AnswerController.store);
router.put("/:id/answers/:answerId", AnswerController.update);
router.delete("/:id/answers/:answerId", AnswerController.destroy);

module.exports = router;
