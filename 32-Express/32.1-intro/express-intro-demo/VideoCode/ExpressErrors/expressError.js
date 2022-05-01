class ExpressError extends Error{
  constructor(status_code, error_msg){
    super();
    this.status_code = status_code;
    this.error_msg = error_msg;
    // console.error(this.stack);
  }
}

module.exports = ExpressError;