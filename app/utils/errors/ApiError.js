const Error = require('./Error');

class ApiError extends Error {

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static invalidCredentials(errors) {
    return new ApiError(400, errors.join(', '));
  }

  static unauthorized() {
    return new ApiError(401, 'You should authorize to use this route');
  }

  static forbidden() {
    return new ApiError(403, 'Verification token is not valid');
  }
}

module.exports = ApiError;