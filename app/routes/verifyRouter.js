const express = require('express');
const AuthController = require('../controllers/AuthController.js');
const verifyRouter = express.Router();

verifyRouter.get('/', AuthController.verifyEmail);

module.exports = verifyRouter;
