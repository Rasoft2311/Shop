const express = require('express');
const AuthController = require('../controllers/AuthController.js');
const submitResetPasswordRouter = express.Router();

submitResetPasswordRouter.get('/', AuthController.submitPasswordReset);

module.exports = submitResetPasswordRouter;
