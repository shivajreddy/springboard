const express = require('express');
const ExpressError = require('../expressError');
const companies = express.Router();
const db = require('../db');

// test route
companies.get('', (req, res, next)=>{
  return res.status(200).send('this is companies page');
})

// GET all companies
companies.get('/all', async(req, res, next)=>{
  const result = await db.query(
    `SELECT * FROM companies`
  )
  return res.status(200).send({ companies: result.rows});
})


// GET company with code
companies.get('/:code', async(req, res, next)=>{
  try {
    const code = req.params.code;
    if(!code){throw new ExpressError('no code is given', 404)};
    const result = await db.query(
      `SELECT * FROM companies WHERE code=$1`, [code]
    );
    return res.status(200).send({company:result.rows});
  } catch (error) {
    next(error);
  }
})


// POST /companies
companies.post('/', async(req, res, next)=>{
  /*
  Format of the request body should be ->
  {
    company: {
    "code" : "comp_code",
    "name" : "comp_name",
    "description" : "comp_descr."
    }
  }
  */
  try {
    const company = req.body.company;
    if(!company){throw new ExpressError('company object not found in the request body', 404)}
    if (!company.code || !company.name || !company.description){throw new ExpressError('the company object doesnt have name or description', 404)}
    if(company.code.includes(" ")){throw new ExpressError(`There can't be any spaces in the company code ${company.code}`, 400)}

    const query_result = await db.query(
      `INSERT INTO companies (code, name, description)
      VALUES ($1, $2, $3)
      RETURNING code, name, description`,
      [company.code, company.name, company.description]
    )
    return res.status(201).send({company : query_result.rows[0]});
  
  } catch (e) {
    next(e)
  }
})


// PUT /companies
companies.put('/:code', async(req, res, next)=>{
  /*  request body format ->
  {
    "name" : "new_comp_name",
    "description" : "new_comp_descr"
  }
  */
  try {
    const code = req.params.code;
    
    if(!code){throw new ExpressError('there is no code given', 404)}
    const {name, description} = req.body;
    console.log('this is the req body', req.body, name, description)
    if(!name || !description){throw new ExpressError('there is no name or description in the given object', 404)}

    const result = await db.query(
      `UPDATE companies
      SET name=$1, description=$2
      WHERE code=$3
      RETURNING code, name, description`,
      [name, description, code]
    );
    if (result.rows.length === 0){throw new ExpressError(`Company code of ${code} not found in DB`, 404)}
    return res.status(200).send(result.rows[0]);
    
  } catch (error) {
    next(error);
  }
})

// DELETE /companies/:code
companies.delete('/:code', async(req, res, next)=>{
  try {
    const code = req.params.code;
    if(!code){throw new ExpressError('NO company code is given', 404)}
    const result = await db.query(
      `DELETE FROM companies
      WHERE code=$1
      RETURNING code`,
      [code]
    )
    if (result.rows.length === 0){throw new ExpressError(`No company with code ${code} exists`, 404)}
    res.status(200).send({status:"delete"});

  } catch (error) {
    next(error);
  }
})


//! End of module
module.exports = companies;
