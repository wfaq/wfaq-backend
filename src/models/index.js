const mongoose = require("mongoose");

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

mongoose.connect(
  `mongodb+srv://wfaq:amarelo23*@cluster0-zmq0q.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
);

module.exports = mongoose;
