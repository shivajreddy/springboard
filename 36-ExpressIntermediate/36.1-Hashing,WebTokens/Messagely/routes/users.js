/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/
const express = require('express');
const userRoutes = express.Router();
const User = require('../models/user');

userRoutes.get('/', async (req, res, next) => {
  const all_users = await User.all();
  return res.status(200).json({ all_users });
})

// my tested protected route
const { authenticateJWT, ensureLoggedIn, ensureCorrectUser } = require('../middleware/auth');
userRoutes.get('/2', ensureLoggedIn, (req, res, next) => {
  try {

    return res.status(200).json({ msg: "reached the secure page" })
  } catch (error) {
    return next(error);
  }
})

userRoutes.get('/3', ensureLoggedIn, (req, res, next) => {
  res.status(200).send(`Succesfull token found. SO WELCOME ${req.user.username}`)
})

/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/

userRoutes.get('/:username', async (req, res, next) => {
  try {
    const usr_name = req.params.username;
    if (!usr_name) return next();
    const usr = await User.get(usr_name);
    return res.status(302).json({ user: usr })
  } catch (error) {
    return next(error);
  }
})

/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/
userRoutes.get('/:username/to', async (req, res, next) => {
  try {

  } catch (error) {
    return next(error);
  }
})


/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

userRoutes.get('/:username/from', async (req, res, next) => {
  try {

  } catch (error) {
    return next(error);
  }
})

module.exports = userRoutes;