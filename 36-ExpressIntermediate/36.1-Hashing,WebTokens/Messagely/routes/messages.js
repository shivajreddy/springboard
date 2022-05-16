const express = require('express');
const ExpressError = require('../expressError');
const messages = express.Router();

const { authenticateJWT, ensureLoggedIn, ensureCorrectUser } = require('../middleware/mid_auth');

const jsonschema = require('jsonschema');
const new_message_schema = require('../schema/new_message_schema.json');

const Message = require('../models/message');


/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/
messages.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) return next();

    const msg = await Message.get(id);

    return res.status(200).json({ message: msg })

  } catch (error) {
    return next(error);
  }
})


/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/
messages.post('/', ensureLoggedIn, async (req, res, next) => {
  try {
    // validate the input message
    const input_validation = jsonschema.validate(req.body, new_message_schema);
    if (!input_validation.valid) {
      let list_of_errors = input_validation.errors.map(error => error.stack);
      return next(new ExpressError(list_of_errors, 403));
    }

    const { to_username, body } = req.body;
    const from_username = req.user.username;
    const msg = await Message.create({ from_username, to_username, body });
    return res.status(200).json({ message: msg })
  } catch (error) {
    if (error.code === '23503') return next(new ExpressError(`to_user ${req.body.to_username} doesnt exist in db`, 404));
    return next(error);
  }
})


/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/
messages.post('/:id/read', ensureLoggedIn, async (req, res, next) => {
  try {
    // validate data
    const id = req.params.id;
    if (!id) return next(new ExpressError(`id can't be empty`, 404));

    const msg = await Message.get(id);
    if (req.user.username !== msg.to_user.username) return next(new ExpressError(`MR.${req.user.username} you can only change status of your messages`, 403));

    const read_msg = await Message.markRead(id);
    return res.status(201).json({ message: read_msg });

  } catch (error) {
    return next(error);
  }
})


module.exports = messages;