class ExpressError extends Error {
  constructor(msg, status) {
    super();
    this.msg = msg;
    this.status = status;
    console.error(this.stack)
  }
}

module.exports = ExpressError;


class myerrorclass extends Error{
  constructor(msg, status){
    super();    // call super any time you are saying extends
    this.msg = msg;
    this.status = status;
    console.error(this.stack)
  }
}


class exError extends Error{

  constructor(msg, status){
    super();
    this.msg = msg;
    this.status = status;
    console.error(this.stack)
  }
}


module.exports = exError;

