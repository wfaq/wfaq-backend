const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-zmq0q.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
);

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
