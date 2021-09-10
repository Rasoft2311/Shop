const mongoose = require('mongoose');
const ServerError = require('../utils/errors/ServerError');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UploadedFile = new mongoose.Schema({
  path: String,
  type: String,
  size: Number,
  folder: String,
  filename: String
});

const ProductScheme = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
      enum: ['meat', 'bakery', 'drink', 'sauce'],
    },
    descriprion: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    image: UploadedFile
  }
);
module.exports = mongoose.model('products', ProductScheme);
