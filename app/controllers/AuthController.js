const User = require('../models/User');
const ApiError = require('../utils/errors/ApiError');
const passport = require('passport');

class AuthController {
  async signIn(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) return next(err);
      if (!user) return res.status(200).json({
        success: false,
        message: 'User already exists'
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
    })(req, res, next);
  }

  async signUp(req, res, next) {
    try {
      const { email } = req.body;
      let user = await User.findOne({email});
      if(user) {
        return next(ApiError.badRequest('User already exists'));
      }
      user = new User(req.body);
      await user.save();
      return res.status(201).json({
        success: true,
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
      });
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new AuthController();