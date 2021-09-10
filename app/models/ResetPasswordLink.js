const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResetPasswordLinkScheme = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: Schema.Types.ObjectId, 
      ref: 'users',
      required: true
    },
    link: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  }
);
ResetPasswordLinkScheme.index({'createdAt': 1 }, { expireAfterSeconds: 60 } );

module.exports = mongoose.model('reset_password_links', ResetPasswordLinkScheme);
