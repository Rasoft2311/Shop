const Error = require('./Error');

class ServerError extends Error {

  static methodNotAllowed() {
    return new ServerError(405, 'This method is not allowed');
  }

  static internalError(err) {
    return new ServerError(500, 'Internal Server Error', err);
  }
}

module.exports = ServerError;