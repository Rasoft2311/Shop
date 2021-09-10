const Error = require('./Error');

class ApiError extends Error {

  static badRequest() {
    return new ApiError(400, 'This link is not valid');
  }

  static invalidCredentials(errors) {
    return new ApiError(400, errors.join(', '));
  }

  static unauthorized() {
    return new ApiError(401, 'You should authorize to use this route');
  }

  static forbidden() {
    return new ApiError(403, 'You are not allowed to use this route');
  }

  static methodNotAllowed() {
    return new ApiError(405, 'This method is not allowed');
  }
}

module.exports = ApiError;