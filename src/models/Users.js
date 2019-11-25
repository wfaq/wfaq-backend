const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: [true, "Please insert email!"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Email must be valid!"]
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    active: {
      type: Boolean,
      required: true,
    },
    role: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      required: true,
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
