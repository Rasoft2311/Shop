const mongoose = require("mongoose");
const ServerError = require('../utils/errors/ServerError');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserScheme = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "user", "worker"],
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date
    },
    verificationId: {
      type: String
    }
  }
);
UserScheme.index({"createdAt": 1 }, { expireAfterSeconds: 60 } );

UserScheme.pre('save', async function(next) {
  try {
    const user = this;
    if (!user.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(user.password, Number(process.env.BCRYPT_SALT_ROUNDS));
    user.password = hashedPassword;
    next();
  } catch(err) {
    return next(ServerError.internalError(err));
  }
});
module.exports = mongoose.model("users", UserScheme);
