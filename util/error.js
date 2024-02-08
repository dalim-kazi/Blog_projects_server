class generalError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
  getCode() {
    return 500;
  }
}

class BadRequest extends generalError {
  constructor(message) {
    super();
    (this.name = "Bad Request"), (this.message = message);
  }
  getCode() {
    return 400;
  }
}

class NotFound extends generalError {
  constructor(message) {
    super();
    (this.name = "NotFound"), (this.message = message);
  }
}

module.exports ={generalError,BadRequest,NotFound}