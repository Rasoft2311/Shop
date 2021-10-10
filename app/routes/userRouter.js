const express = require('express');
const { editSchema } = require('../../validation/back.js');
const UserController = require('../controllers/UserController.js');
const { isAuth } = require('../middleware/provideAuth.js');
const provideValidation = require('../middleware/provideValidation.js');
const userRouter = express.Router();

userRouter.get('/current', UserController.getCurrentUserInfo);
userRouter.patch('/current', isAuth, provideValidation(editSchema), UserController.updateUserInfo);

module.exports = userRouter;
