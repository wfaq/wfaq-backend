const router = require("express").Router();

const QuestionController = require("../controllers/questionController");
const AnswerController = require("../controllers/AnswerController");
const AnswerVotesController = require("../controllers/AnswerVotesController");
const TagController = require("../controllers/TagController");

router.get("/", QuestionController.index);
router.post("/", QuestionController.create);
router.put("/:id", QuestionController.update);
router.delete("/:id", QuestionController.destroy);

router.post("/:id/answers", AnswerController.store);
router.put("/:id/answers/:answerId", AnswerController.update);
router.delete("/:id/answers/:answerId", AnswerController.destroy);

router.post("/:id/answers/:answerId/up", AnswerVotesController.up);
router.post("/:id/answers/:answerId/down", AnswerVotesController.down);

router.post("/:id/tags",TagController.store);
router.delete("/:id/:tag/tags",TagController.destroy); //pull

module.exports = router;
