const express = require('express');
const signInRouter = require('./signInRouter.js');
const signOutRouter = require('./signOutRouter.js');
const signUpRouter = require('./signUpRouter.js');
const verifyRouter = require('./verifyRouter.js');
const resetPasswordRouter = require('./resetPasswordRouter.js');
const submitResetPasswordRouter = require('./submitResetPasswordRouter.js');
const userRouter = require('./userRouter.js');
const productRouter = require('./productRouter.js');
const apiRouter = express.Router();

apiRouter.use('/sign-in', signInRouter);
apiRouter.use('/sign-out', signOutRouter);
apiRouter.use('/sign-up', signUpRouter);
apiRouter.use('/verify', verifyRouter);
apiRouter.use('/reset-password', resetPasswordRouter);
apiRouter.use('/submit-password-reset', submitResetPasswordRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/products', productRouter);

module.exports = apiRouter;
