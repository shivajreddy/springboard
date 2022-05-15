// authentication middleware
const express = require('express');
const ExpressError = require('../expressError');
const authRoutes = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { SECRET_KEY, BCRYPT_WORK_FACTOR } = require('../config');
const User = require('../models/user');


/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/
authRoutes.post('/login', async (req, res, next) => {
  /*format object to login
  {
    "username" : "",
    "password" : ""
  }
  */
  try {
    const { username, password } = req.body;

    if (!username || !password) throw new ExpressError(`no username or pass`, 404);

    const usr = await User.get(username);
    // console.log('this is the usr', usr);

    // compare with bcrypt.compare()
    const correct_password = await bcrypt.compare(password, usr.password);

    // sign with jwt if correct password
    if (correct_password) {
      const pay_load = usr;
      const token = jwt.sign({ pay_load }, SECRET_KEY);
      req.body._token = token;
      req.user = pay_load;
      usr.last_login_at = new Date();
      usr.save();
      console.log('this is the usr after saving', usr);
      return res.status(200).json({ msg: `Logged in succesfully ${req.user.username}`, your_token: token })
    } else {
      return res.status(403).json({ result: `password incorrect for ${username}` });
    }
    return next();

  } catch (error) {
    // console.log('error handling for login route')
    return next(error);
  }

})

/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */
authRoutes.post('/register', async (req, res, next) => {
  /*  Format of the body to create a new user
  {
    username: "not existing in db",
    password: "not null",
    first_name: "not null",
    last_name: "not nul",
    phone: "text not null",
    -> join_at : auto gen. date,
    -> last_login : empty
  }
  */
  try {
    // get the user information
    const { username, password, first_name, last_name, phone } = req.body;

    // error checks
    if (!username || !password || !first_name || !last_name || !phone) throw new ExpressError(`given usr object has formatting errors`, 404);

    // bcrypt.hash()
    const hashed_pw = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    // create user object with given details + hashed_pw 
    const usr = { username, hashed_pw, first_name, last_name, phone };

    // save the user details to db
    const new_user = await User.register(usr);

    // sign with jwt
    // debugger
    const token = jwt.sign({ ...new_user }, SECRET_KEY);
    req.body._token = token;

    return res.status(201).json({ "created_user": new_user, "signed token": token })

  } catch (error) {
    if (error.code === '23505') {
      return next(new ExpressError(`username:${req.body.username} already taken`, 404));
    } else {
      return next(error);
    }
  }
})

module.exports = authRoutes;