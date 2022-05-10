const app = require('../app');
const db = require('../db');
const express = require('express');
const ExpressError = require('../expresserror');
const router = express.Router();
const bcrypt = require('bcrypt');
const {SECRET_KEY, BCRYPT_WORK_FACTOR} = require('../config');
const jwt = require('jsonwebtoken');

const {jwt_auth, ensureLogin} = require('../middleware/auth')


router.get('/', (req, res, next)=>{
  return res.status(200).send('Router Home Page');
})


router.get('/register', async (req, res, next)=>{
  try {
    const {username, password} = req.body;
    
    // hash password
    const hashed_pw = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    // console.log('given usr and pass', username, password, BCRYPT_WORK_FACTOR, hashed_pw);

    // save to db
    const result = await db.query(
      `INSERT into users (username, password)
      VALUES ($1, $2)
      RETURNING username`
      , [username, hashed_pw]
    )
    const mytoken = jwt.sign({username: username, password:hashed_pw} ,SECRET_KEY);
    console.log(mytoken);
    return res.status(201).json(result.rows[0]);

  } catch (error) {
    if(error.code === '23505') {return next(new ExpressError(`${error.detail}`, 404))};
    return next(error);
  }
})

router.get('/login', async(req, res, next)=>{
  try {
    const {username, password} = req.body;
    const result = await db.query(
      `SELECT password FROM users
      WHERE username=$1`
      , [username]
    )
    if(result.rowCount === 0){throw new ExpressError(`No user of ${username}`, 404)};
    const auth = await bcrypt.compare(password, result.rows[0].password);
    if (auth){
      const token = jwt.sign({username}, SECRET_KEY);
      return res.status(200).json({message: 'Succesffully loggged', token})
    }
    else{return res.status(400).send('WRONG PASSWORD')};
  } catch (error) {
    next(error);
  }
})

router.get('/all', async(req, res, next)=>{
  const result = await db.query(`SELECT * FROM users`);
  return res.json(result.rows);
})


router.get('/private', async(req, res, next)=>{
  res.json( { msg : `Welcome to VIP hub ${req.user.username}`})
})

router.get('/secretpage', jwt_auth, (req,res,next)=>{
  console.log('this is the req object', req)
  return res.json({msg:'welcome to secret page'})
  // return res.send(`Welcome to secret page this is the payload ${req.user.username}`)
})

router.get('/page2', (req, res, next)=>{
  return res.send()
})


module.exports = router;
