const mongoose = require("mongoose");
const ServerError = require('../utils/errors/ServerError');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserScheme = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "forgot to enter first name"],
    },
    lastName: {
      type: String,
      required: [true, "forgot to enter last name"],
    },
    email: {
      type: String,
      required: [true, "forgot to enter login"],
    },
    password: {
      type: String,
      required: [true, "forgot to enter password"],
    },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "user", "worker"],
    },
  }
);

UserScheme.pre('save', async function(next) {
  try {
    const user = this;
    if (!user.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
    next();
  } catch(err) {
    next(err);
  }
});
module.exports = mongoose.model("users", UserScheme);
