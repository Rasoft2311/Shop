const ServerError = require('../utils/errors/ServerError');

const unsupportedMethodHandler = (req, res, next) => {
  next(ServerError.methodNotAllowed('This method is not allowed'));
};

module.exports = unsupportedMethodHandler;
