// middleware functions
const ExpressError = require('./expresserror')

function logger(req,res,next){
  console.log(`Requested methods=${req.method}. Requested path=${req.path}`)
  next();
}

function checkPassword(req,res,next){
  const pass = req.params.password;
  try{
    if (pass !=='monkey'){
      throw new ExpressError('wrong password', 402);
    }
    return next();
  } catch(e){return next(e)}
}




module.exports = {logger, checkPassword}