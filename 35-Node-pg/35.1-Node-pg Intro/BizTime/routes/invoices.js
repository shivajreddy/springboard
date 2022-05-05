const express = require('express');
const invoices = express.Router();
const db = require('../db');

invoices.get('', (req, res, next)=>{
  return res.status(200).send('this is invoices page');
})

invoices.get('/all', async(req, res, next)=>{
  try {
    const result = await db.query(
      `SELECT * FROM invoices`
    )
    return res.status(200).send({invoices : result.rows});
  } catch (error) {
    next(error)
  }
})


module.exports = invoices;