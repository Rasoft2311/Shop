const express = require('express');
const signInRouter = require('./signInRouter.js');
const signUpRouter = require('./signUpRouter.js');
const apiRouter = express.Router();

apiRouter.use('/sign-in', signInRouter);
apiRouter.use('/sign-up', signUpRouter);

module.exports = apiRouter;
