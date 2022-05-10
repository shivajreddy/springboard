const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../config');
const ExpressError = require('../expresserror');

// middleware call back function
function jwt_auth(req, res, next){
  try {
    const payload = jwt.verify(req.body._token, SECRET_KEY);
    req.user = payload;
    console.log('you have a valid token ✅');
    return next();
  } catch (error) {
    return next();
  }
}

function ensureLogin(req, res, next){
  if(!req.user){
    console.log('middle ware check for ensure login started');
    const e = new ExpressError('Unauthorized ❌', 401);
    return next(e);
  }
  else{
    return next();
  }
}


module.exports = { jwt_auth, ensureLogin }