const express = require('express');
const AuthController = require('../controllers/AuthController.js');
const provideValidation = require('../middleware/provideValidation.js');
const { resetPasswordSchema } = require('../../validation/back.js');
const resetPasswordRouter = express.Router();

resetPasswordRouter.post('/', provideValidation(resetPasswordSchema), AuthController.resetPassword);

module.exports = resetPasswordRouter;
