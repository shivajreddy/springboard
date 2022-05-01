const express = require('express');
const ExpressError = require('./expresserror');

const app = express();

app.use((req,res,next)=>{
  console.clear();
  next();
})


app.get('/',function route_homePage(req,res,next){
  return res.send('follow along routing 🧐')
})


// global error handler
app.use((error,req,res,next)=>{
  return res.status(error.status).send(errror.msg);
})

// port 
const app_port = 2000;
app.listen(app_port, ()=>{
  console.log(`App started & listening at ${app_port}`);
})
