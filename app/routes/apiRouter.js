const express = require('express');
const signInRouter = require('./signInRouter.js');
const signUpRouter = require('./signUpRouter.js');
const verifyRouter = require('./verifyRouter.js');
const resetPasswordRouter = require('./resetPasswordRouter.js');
const submitResetPasswordRouter = require('./submitResetPasswordRouter.js');
const apiRouter = express.Router();

apiRouter.use('/sign-in', signInRouter);
apiRouter.use('/sign-up', signUpRouter);
apiRouter.use('/verify', verifyRouter);
apiRouter.use('/reset-password', resetPasswordRouter);
apiRouter.use('/submit-password-reset', submitResetPasswordRouter);

module.exports = apiRouter;
