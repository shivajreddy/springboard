const express = require('express');
const ExpressError = require('../expressError');
const industries = express.Router();
const db = require('../db');
const slugify = require('slugify');

// test route
industries.get('', (req, res, next)=>{
  return res.status(200).send('this is industries page');
})

// GET route
industries.get('/all', async(req,res,next)=>{
  const result = await db.query(
    `SELECT * FROM industries`
  )
  return res.status(200).json(result.rows)
})

// GET route for industry by id
industries.get('/:ind_code', async(req,res,next)=>{
  try {
    const ind_code = req.params.ind_code;

    const result = await db.query(
      `SELECT * FROM industries
      WHERE code=$1`
      , [ind_code]
    )
    if(result.rows.length === 0){throw new ExpressError(`Couldn't find industry for if ${ind_code}`, 404)};
    return res.status(200).json(result.rows);
  } catch (error) {
    return next(error);
  }
})

// PUT make a new industry
industries.put('/new', async(req, res, next)=>{
  /* New industry format ->
  {industry:
    {code : "ind_code",
    industry : "industry_name"}
  }
  */
  try {
    if(!req.body.industry){throw new ExpressError(`Body has no industry object`, 404)};
    const {code, industry} = req.body.industry;
    const industry_query = await db.query(
      `SELECT * FROM industries
      WHERE code=$1`
      , [code]
    )
    if(industry_query.rows.length > 0){throw new ExpressError(`${ind_code} already exists`, 404)};
    const result = await db.query(
      `INSERT INTO industries (code, industry)
      VALUES ($1, $2)
      RETURNING *`
      , [slugify(code), industry]
    );
    console.log(result.rows);
    return res.status(201).json({created: req.body.industry});
  } catch (error) {
    return next(error);
  }
})


module.exports = industries;