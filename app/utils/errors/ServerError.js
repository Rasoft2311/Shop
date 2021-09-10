const Error = require('./Error');

class ServerError extends Error {

  static internalError(err) {
    return new ServerError(500, 'Internal Server Error', err);
  }
}

module.exports = ServerError;