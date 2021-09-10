const express = require('express');
const passport = require('passport');
const { signInSchema } = require('../../validation/back.js');
const AuthController = require('../controllers/AuthController.js');
const provideValidation = require('../middleware/provideValidation.js');
const signInRouter = express.Router();

signInRouter.post('/', provideValidation(signInSchema), AuthController.signIn);

module.exports = signInRouter;
