class ExpressError extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}

module.exports = ExpressError;
