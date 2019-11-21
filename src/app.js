const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

mongoose.connect(
    `mongodb+srv://teste1:teste1@cluster0-zmq0q.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  );

const routes = require("./routes");


const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;
