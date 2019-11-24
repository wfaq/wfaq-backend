const router = require("express").Router();

const authController = require("../controllers/AuthController");

router.post("/signup", authController.register);
router.post("/authenticate", authController.authenticate);

module.exports = router;
