const app = require('../app');
const express = require('express');
const ExpressError = require('../expresserror');
const users = express.Router();
const db = require('../db');



// users.get('/all', (req, res, next) => {
//   return res.status(200).send('Users Home Page');
// })


users.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new ExpressError('no id given', 404)
    };

    const result = await db.query(
      `SELECT * FROM users
      WHERE id=$1`,
      [id]
    );
    if (result.rows.length === 0) {
      throw new ExpressError(`No user found with the id ${id}`, 404)
    };

    return res.status(200).send(result.rows);

  } catch (error) {
    next(error);
  }
})


module.exports = users;
