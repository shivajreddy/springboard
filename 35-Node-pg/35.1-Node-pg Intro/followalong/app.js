const express = require('express');
const ExpressError = require('./expresserror');
const pg = require('pg'); //1
//2 connect to database
//3 connect to database

const app = express();

app.use(express.json());

app.use((req, res, next)=>{
  console.clear();
  next();
})

// import router
const router = require('./routes/router');
app.use('/users',router);


app.get('/',(req, res, next)=>{
  return res.send('FOllow along 35.1 Node-pg');
})


// 404 handler
app.use((req, res, next)=>{
  const error_404 = new ExpressError('URL not found', 404);
  return next(error_404);
})

// Global error handler
app.use((error, req, res, next)=>{
  // let error_msg = error.msg || "global Error message";
  let error_msg = error.msg;
  let error_status = error.status || 505;
  console.error(error.stack)
  return res.status(error_status).send(error_msg);
})

module.exports = app;