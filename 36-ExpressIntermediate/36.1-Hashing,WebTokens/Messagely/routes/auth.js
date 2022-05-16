const express = require('express');
const ExpressError = require('../expressError');
const router = express.Router();

const User = require('../models/user');
const bcrypt = require('bcrypt');
const { SECRET_KEY, BCRYPT_WORK_FACTOR } = require('../config');

const jsonschema = require('jsonschema');
const user_registration_schema = require('../schema/user_registration_schema.json');
const user_login_schema = require('../schema/user_login_schema.json');

const jsonwebtoken = require('jsonwebtoken');


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

router.post('/register', async (req, res, next) => {
  try {
    const input_validation = jsonschema.validate(req.body, user_registration_schema);
    // validate the input data
    if (!input_validation.valid) {
      let list_of_errors = input_validation.errors.map(error => error.stack);
      return next(new ExpressError(list_of_errors, 403));
    };

    // input data is validated
    const { username, password, first_name, last_name, phone } = req.body;
    // hash the password
    const hashed_password = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const join_at = new Date();
    const last_login_at = new Date();
    const new_user = await User.register(username, hashed_password, first_name, last_name, phone, join_at, last_login_at);

    const token = jsonwebtoken.sign(new_user, SECRET_KEY);
    return res.status(201).json({ token: token });

  } catch (error) {
    if (error.code === '23502') return next({ status: 403, msg: `Missing field - ${error.column}` })
    if (error.code === '23505') return next({ status: 403, msg: `username ${req.body.username} already taken` });
    return next(error);
  }
})



/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/
router.post('/login', async (req, res, next) => {
  try {
    const input_validation = jsonschema.validate(req.body, user_login_schema);
    // validate the input data
    if (!input_validation.valid) {
      let list_of_errors = input_validation.errors.map(error => error.stack);
      return next(new ExpressError(list_of_errors, 403));
    }

    const { username, password } = req.body;
    const usr_details = await User.get_with_hashed_password(username);

    // verify username
    if (!usr_details) return next(new ExpressError(`No username of ${username}`, 403))

    // verify password
    const correct_password = await bcrypt.compare(password, usr_details.password);

    if (!correct_password) return next(new ExpressError('Wrong password', 403));

    const token = jsonwebtoken.sign(usr_details, SECRET_KEY);
    return res.status(200).json({ token: token });

  } catch (error) {
    return next(error);
  }
})



module.exports = router;