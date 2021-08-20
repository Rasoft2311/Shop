const Error = require('./Error');

class ApiError extends Error {

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static invalidCredentials(errors) {
    return new ApiError(400, errors.join(', '));
  }
}

module.exports = ApiError;