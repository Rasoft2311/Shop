const ServerError = require('../utils/errors/ServerError');

const unsupportedMethodHandler = (req, res, next) => {
  next(ServerError.methodNotAllowed());
};

module.exports = unsupportedMethodHandler;
