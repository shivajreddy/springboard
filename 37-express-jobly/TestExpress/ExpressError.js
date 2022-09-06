class ExpressError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
    console.error(this.stack);
  }
}

module.exports = ExpressError;
