// authentication middleware
const express = require('express');
const authRoutes = express.Router();

authRoutes.get('/', (req, res, next)=>{
  return res.status(200).json({msg:"reached the auth routes hp"});
})


/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/
authRoutes.post('/login', (req, res, next)=>{

  // bcrypt.compare()

  // jwt.sign()

})

// call back fn for app

/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */
authRoutes.post('/register', async(req, res, next)=>{
  /*  Format of the body to create a new user
  {
    
  }
  */
  try {
    // get the user information
    const {} = req.body;
    // bcrypt.hash()

    // save the hashed password to bcrypt

    // 
  } catch (error) {
    return next(error);
  }
})

module.exports = authRoutes;