const router = require('express').Router();

const UserController = require("../controllers/UserController");

router.get("/", UserController.index);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.destroy);

module.exports = router;