const router = require("express").Router();

const applicationAuthController = require("../controllers/applicationAuthController");

router.post("/applicationAuthenticate", applicationAuthController.authenticate);

module.exports = router;
