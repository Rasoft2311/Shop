const express = require("express");
const AuthController = require("../controllers/AuthController.js");
const provideValidation = require('../middleware/provideValidation.js');
const { signInSchema } = require('../../validation/index.js');
const resetPasswordRouter = express.Router();

resetPasswordRouter.post("/", provideValidation(signInSchema), AuthController.resetPassword);

module.exports = resetPasswordRouter;
