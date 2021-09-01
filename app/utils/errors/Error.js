class Error {
  constructor(code, message, initialError) {
    this.code = code;
    this.message = message;
    this.initialError = initialError;
  }
}

module.exports = Error;