class ExpressError extends Error{
  constructor(error_msg, status_code){
    super();
    this.error_msg = error_msg;
    this.status_code = status_code;
    console.error(this.stack);
  }
}

module.exports = ExpressError;