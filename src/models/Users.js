const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

UserSchema.pre("save", async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = model("User", UserSchema);
