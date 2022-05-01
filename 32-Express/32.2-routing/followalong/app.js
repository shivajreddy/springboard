const express = require('express');
const ExpressError = require('./expresserror');
const middleware = require('./middleware');


const app = express();

// import routes 
const myroutes = require('./myroutes');
app.use("", myroutes);

// middleware
app.use(middleware.logger);
// app.use(middleware.checkPassword);


app.get('/',function route_homePage(req,res,next){
  return res.send('follow along routing 🧐')
})


app.get('/secrets/:password', middleware.checkPassword, (req,res,next)=>{
  return res.send('Yay welcome');
})


app.get('/private/:password', middleware.checkPassword, (req,res,next)=>{
  return res.send('Private welcome');
})




// global error handler
app.use((error,req,res,next)=>{
  console.log('global error object', error)
  return res.status(error.status).send(error.msg);
})

// port 
const app_port = 2000;
app.listen(app_port, ()=>{
  console.log(`App started & listening at ${app_port}`);
})
