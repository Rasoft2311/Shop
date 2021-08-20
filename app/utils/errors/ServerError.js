const Error = require('./Error');

class ServerError extends Error {

  static methodNotAllowed(msg) {
    return new ServerError(405, msg);
  }

  static internalError(msg) {
    return new ServerError(500, msg);
  }
}

module.exports = ServerError;