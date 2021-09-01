const ApiError = require('../utils/errors/ApiError');

module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
      next();
  } else {
      next(ApiError.unauthorized());
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.admin) {
      next();
  } else {
      res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin.' });
  }
};