const router = require("express").Router();
const questionRoutes = require("./questionRoutes");
const UsersRouters = require("./usersRouters");
const authRoutes = require("./authRoutes");
const SearchRouter = require("./SearchRoutes");

const auth = require("../middlewares/auth");

router.use(authRoutes);
router.use("/questions", auth, questionRoutes);
router.use("/users", UsersRouters);
router.use("/search", SearchRouter);

router.get("/", (req, res) => {
  res.status(200).json({ app: "wFaq-backend", version: "0.0.1" });
});

// require('../models/questions');

module.exports = router;
