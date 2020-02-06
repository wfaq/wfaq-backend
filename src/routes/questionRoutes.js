const router = require("express").Router();

const QuestionController = require("../controllers/questionController");
const AnswerController = require("../controllers/AnswerController");
const AnswerVotesController = require("../controllers/AnswerVotesController");
const TagController = require("../controllers/TagController");

//perguntas
router.get("/", QuestionController.index);
router.get("/:_id", QuestionController.show);
router.post("/", QuestionController.create);
router.put("/:id", QuestionController.update);
router.delete("/:id", QuestionController.destroy);

// respostas
router.post("/:id/answers", AnswerController.store);
router.put("/:id/answers/:answerId", AnswerController.update);
router.delete("/:id/answers/:answerId", AnswerController.destroy);

//votos positivos e negativos
router.post("/:id/answers/:answerId/up", AnswerVotesController.up);
router.post("/:id/answers/:answerId/down", AnswerVotesController.down);

//voto do willChange:
router.post("/:id/answers/:answerId/will", AnswerVotesController.will);

//tags
router.post("/:id/tags", TagController.store);
router.delete("/:id/:tag/tags", TagController.destroy); //pull


module.exports = router;
