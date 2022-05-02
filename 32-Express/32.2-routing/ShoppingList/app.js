const express = require('express');
const ExpressError = require('./expresserror');
const db = require('./fakeDB');

const app = express();
app.use(express.json());    //respond using json

app.use((req,res,next)=>{
  console.clear();
  next();
})

// import routes
const items_router = require('./items')
app.use('/items', items_router)


app.get('/',(req,res,next)=>{
  return res.send('Shopping List home page');
})



// 404 handler
app.use((req,res,next)=>{
  const error_404 = new ExpressError('404 page error', 404);
  // res.send('URL not found :(');
  return next(error_404);
})


// Global Error handler
app.use((error, req, res, next)=>{
  let error_msg = error.msg;
  let error_status = error.status || 404;
  console.error(error)
  return res.status(error_status).send(error_msg);
})


module.exports = app;
