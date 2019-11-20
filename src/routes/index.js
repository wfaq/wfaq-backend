const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ app: "wFaq-backend", version: "0.0.1" });
});

module.exports = router;
