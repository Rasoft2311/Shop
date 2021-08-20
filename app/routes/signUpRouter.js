const express = require("express");
const { signUpSchema } = require('../../validation/index.js');
const AuthController = require("../controllers/AuthController.js");
const provideValidation = require('../middleware/provideValidation.js');
const signUpRouter = express.Router();

signUpRouter.post("/", provideValidation(signUpSchema), AuthController.signUp);

module.exports = signUpRouter;
