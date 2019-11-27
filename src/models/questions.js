const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    user: {
      type: String
    },
    answers: [
      {
        user_id: { type: String, required: true },
        answer: { type: String, required: true },
        upVotes: [],
        downVotes: []
      }
    ],    
    tags: [],
  },
  {
    timestamps: true
  }
);

module.exports = model("Question", QuestionSchema);
