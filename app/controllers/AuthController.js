const User = require('../models/User');
const ResetPasswordLink = require('../models/ResetPasswordLink');
const ApiError = require('../utils/errors/ApiError');
const ServerError = require('../utils/errors/ServerError');
const passport = require('passport');
const bcrypt = require('bcrypt');


class AuthController {
  async signIn(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) return next(ServerError.internalError(err));
      if(user) {
        if(!user.isVerified) return res.status(200).json({
          success: false,
          message: 'You did not verify your account'
        });
        req.logIn(user, function(err) {
          if (err) return next(err);
          return res.status(200).json({
            success: true,
            user: {
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName
            }
          });
        });
      }
      return res.status(200).json({
        success: false,
        message: 'Wrong credentials'
      });
    })(req, res, next);
  }

  async signUp(req, res, next) {
    try {
      const { email } = req.body;
      let user = await User.findOne({email});
      if(user) {
        if(user.isVerified) return res.status(200).json({
          success: false,
          message: 'User already exists'
        });
        return res.status(200).json({
          success: false,
          message: 'You already registered account with this email. You need to verify your account'
        });
      }
      user = new User({
        createdAt: new Date(),
        ...req.body
      });
      user.verificationId = await bcrypt.hash(String(user._id), Number(process.env.BCRYPT_SALT_ROUNDS));
      await user.save();
      return res.status(201).json({
        success: true
      });
    } catch(err) {
      return next(ServerError.internalError(err));
    }
  }

  async verifyEmail(req, res, next) {
    const verificationId = req.query.id;
    if(verificationId) {
      try {
        let user = await User.findOne({verificationId});
        if(user) {
          user.isVerified = true;
          user.createdAt = undefined;
          user.verificationId = undefined;
          await user.save();
          return res.status(200).json({
            success: true
          });
        }
        return next(ApiError.forbidden());
      } catch(err) {
        return next(ServerError.internalError(err));
      }
    } else {
      return next(ApiError.forbidden());
    }
  }

  async resetPassword(req, res, next) {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({email});
      if(!user) {
        return next(ApiError.badRequest('No user was found with such email address'));
      }
      let userResetLink = await ResetPasswordLink.findOne({user: user._id});
      if(userResetLink) {
        return next(ApiError.badRequest('Email was already sent to verify your password change'));
      }
      const resetPasswordLink = new ResetPasswordLink({
        user,
        password,
        link: await bcrypt.hash(String(user._id), Number(process.env.BCRYPT_SALT_ROUNDS))
      });
      await resetPasswordLink.save();
      return res.status(201).json({
        success: true,
        message: 'Email was sent to verify your password change'
      });
    } catch(err) {
      return next(ServerError.internalError(err));
    }
  }

  async submitPasswordReset(req, res, next) {
    const link = req.query.id;
    if(link) {
      try {
        let resetLink = await ResetPasswordLink.findOne({link}).populate('user');
        if(resetLink) {
          resetLink.user.password = resetLink.password;
          console.log(resetLink.user.expireAt);
          await resetLink.user.save();
          await resetLink.remove();
          return res.status(200).json({
            success: true
          });
        }
        return next(ApiError.forbidden());
      } catch(err) {
        return next(ServerError.internalError(err));
      }
    } else {
      return next(ApiError.forbidden());
    }
  }
}

module.exports = new AuthController();