const express = require('express');
const ExpressError = require('../expressError');
const users = express.Router();

const User = require('../models/user');
const Message = require('../models/message');

/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/
users.get('/', async (req, res, next) => {
  try {
    const all_users = await User.all();
    return res.status(200).json({ all_users: all_users });
  } catch (error) {
    return next(error);
  }
});



/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/
users.get('/:username', async (req, res, next) => {
  try {
    if (!req.params.username) return next();
    const username = req.params.username;
    const usr = await User.get(username);
    if (!usr) return next({ status: 404, msg: `No user found with username ${username}` }, 404);

    return res.status(200).json({ user: usr })

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
users.get('/:username/from', async (req, res, next) => {
  try {
    const username = req.params.username;
    if (!username) return next(new ExpressError('username cant be empty', 403));

    const messages = await User.messagesFrom(username);
    // this will message object also has from_user, since Message.get() has that

    return res.status(200).json({ messages: messages })

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
users.get('/:username/to', async (req, res, next) => {
  try {
    const username = req.params.username;
    if (!username) return next(new ExpressError('username cant be empty', 403));

    const messages = await User.messagesTo(username);
    // this will message object also has from_user, since Message.get() has that

    return res.status(200).json({ messages: messages })

  } catch (error) {
    return next(error);
  }
})


module.exports = users;