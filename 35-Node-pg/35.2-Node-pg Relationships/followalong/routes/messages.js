const app = require('../app');
const db = require('../db');
const express = require('express');
const messages = express.Router();


messages.get('/all', async (req, res, next) => {
  try {
    const result = await db.query(
      `SELECT * FROM messages`
    )
    return res.status(200).json({
      messages: result.rows
    })
  } catch (error) {
    next(error);
  }
})


messages.get('/msgtags/:msg_id', async (req, res, next) => {
  try {
    const msg_id = req.params.msg_id;

    const result = await db.query(
      `SELECT m.id, m.msg, t.tag
      FROM messages AS m
      LEFT JOIN messages_tags as mt
      ON m.id=mt.message_id
      LEFT JOIN tags as t
      ON mt.tag_code=t.code`
    )
    console.log(`this is the result`, result.rows);
    
    return res.send(result);
  } catch (error) {
    next(error);
  }
})


module.exports = messages;