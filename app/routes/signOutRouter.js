const express = require('express');
const AuthController = require('../controllers/AuthController.js');
const { isAuth } = require('../middleware/provideAuth.js');
const signOutRouter = express.Router();

signOutRouter.get('/', isAuth, AuthController.signOut);

module.exports = signOutRouter;
