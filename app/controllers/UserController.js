const ServerError = require('../utils/errors/ServerError');

class UserController {
  async getCurrentUserInfo(req, res, next) {
    res.status(200).json({
      success: true,
      user: {
        email: req.user.email,
        firstName: req.user.firstName,
        lastName: req.user.lastName
      }
    });
  }

  async updateUserInfo(req, res, next) {
    try {
      const property = Object.keys(req.body)[0];
      req.user[property] = req.body[property];
      await req.user.save();
      res.status(200).json({
        success: true,
        user: {
          email: req.user.email,
          firstName: req.user.firstName,
          lastName: req.user.lastName
        }
      });
    } catch(err) {
      return next(ServerError.internalError(err));
    }
  }
}

module.exports = new UserController();