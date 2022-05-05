const express = require('express');
const ExpressError = require('../expressError');
const invoices = express.Router();
const db = require('../db');

// test route
invoices.get('', (req, res, next)=>{
  return res.status(200).send('this is invoices page');
})


// GET all invoices
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


// Get invoice of id
invoices.get('/:id', async(req, res, next)=>{
  try {
    const id = req.params.id;
    if(isNaN(id)){throw new ExpressError('id must be an integer')};
    if(!id){throw new ExpressError('no id given', 404)};
    const result = await db.query(
      `SELECT * FROM invoices
      WHERE id=$1`,
      [id]
    )
    const comp_result = await db.query(
      `SELECT code, name, description
      FROM companies
      WHERE code=$1`,
      [result.rows[0].comp_code]
    )
    if(comp_result.rows.length === 0){return res.status(200).send({ invoice: result.rows[0], company: "no company info found"}) };
    if(result.rows.length === 0){throw new ExpressError(`No invoices found for ${id}`, 200)};
    return res.status(200).send({ invoice: result.rows[0], company :comp_result.rows[0]});
  } catch (error) {
    next(error);
  }
})


// PUT invoice of id
invoices.put('/:id', async(req, res, next)=>{
  /* invoice object format ->
  {
    "comp_code" : "apple",
    "amt" : 100,
    "paid" : false,
    "add_date" : "2022-05-04T04:00:00.000Z",
    "paid_date" : null
  }

  */
  try {
    console.log('this is the body', req.body)     
    const id = req.params.id;
    if(isNaN(id)){throw new ExpressError('id must be an integer')};
    if(!id){throw new ExpressError('no id given', 404)};
    const {comp_code, amt, paid, add_date, paid_date} = req.body;

    const comp_result = await db.query(
      `SELECT code, name, description
      FROM companies
      WHERE code=$1`,
      [comp_code]
    )
    if(comp_result.rows.length === 0){throw new ExpressError(`Given ${comp_code} is not there in company table`)};

    const result = db.query(
      `UPDATE invoices 
      SET amt=$2, paid=$3, add_date=$4, paid_date=$5
      WHERE id=$1
      RETURNING comp_code, amt, paid, add_date, paid_date`,
      [id,amt, paid, add_date, paid_date]
    )
    return res.status(201).json({invoice: {...req.body}})
  } catch (error) {
    next(error);
  }
})


invoices.delete('/:id', async(req, res, next)=>{
  try {
    const id = req.params.id;
    if(isNaN(id)){throw new ExpressError('id must be an integer')};
    if(!id){throw new ExpressError('no id given', 404)};

    const result = await db.query(
      `DELETE FROM invoices
      WHERE id=$1
      RETURNING id, comp_code, amt, paid, add_date, paid_date`,
      [id]
    )
    if(result.rows.length === 0){throw new ExpressError(`Couldn't find the invoice with id ${id}`, 200)}
    return res.status(200).json({status:"deleted"});

  } catch (error) {
    next(error);
  }
})





module.exports = invoices;
