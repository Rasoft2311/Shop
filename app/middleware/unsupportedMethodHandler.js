const ApiError = require('../utils/errors/ApiError');

const unsupportedMethodHandler = (req, res, next) => {
  next(ApiError.methodNotAllowed());
};

module.exports = unsupportedMethodHandler;
