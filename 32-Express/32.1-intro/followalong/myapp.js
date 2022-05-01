// const express = require('express');
// const ExpressError = require('./expresserror');

// const app = express();

// // clear console
// app.use((req,res,next)=>{
//   console.clear();
//   next();
// })


// app.get('/', (req,res)=>{
//   console.log('home route');
//   return res.send('Hello world');
// })

// const users = ['shiva', 'reddy', 'england', 'dubinsky']


// app.get('/users/:username', (req,res,next)=>{
//   try{
//     const user = users.find(u=>u===req.params.username);
//     if (!user){
//       throw new ExpressError(`Couldn't find user ${req.params.username} in ${users}`, 212);
//     }
//     return res.status(200).send(`Found the user ${req.params.username} in ${users}`)
//   } catch(e){
//     return next(e)
//   }

// })


// // Handling 404 errors
// app.use((req,res,next)=>{
//   const error_404 = new ExpressError(':( are you lost?', 405)
//   return next(error_404);
// })

// // Error handling, with final middle ware
// app.use((error, req, res, next)=>{

//   let error_msg = error.error_msg || 'DEFAULT ERROR MESSAGE';
//   let error_code = error.status_code || 404;

//   return res.status(error_code).send(error_msg);
// })

// // Port
// const app_port = 2121;
// app.listen(app_port, ()=>{
//   console.log(`App started & listent @ ${app_port}`)
// })

const express = require('express');
const ExpressError = require('./expresserror');

const app = express();

// clear console
app.use((req,res,next)=>{
  console.clear();
  next();
});


// home route
app.get('/', function homePage(req,res,next){
  return res.status(200).send('HOME pAgE');
})

const users_db = ['shiva', 'reddy', 'england', 'dubinsky', 'boo'];

// test error handling
app.get('/users/:username', function getUsername(req,res,next){
  const given_name = req.params.username;
  debugger
  try{
    const usr = users_db.find(u=>u===given_name);
    if (!usr){
      throw new ExpressError(`Couldnt find ${given_name} in ${users_db}`, 515);
    }
    return res.status(200).send(`✅ Found ${given_name} in ${users_db}`);
  } catch(e){
    return next(e);
  }
})

//? 404 page
app.use((req,res,next)=>{
  const error_404 = new ExpressError('Page you are looking for is not found', 404);
  next(error_404);
})

//? Global Error handling
app.use((error, req, res, next)=>{
  return res.status(error.status).send(error.msg);
})


//? app port
app_port = 4141
app.listen(app_port, ()=>{
  console.log(`App started at ${app_port}`);
})
