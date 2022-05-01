const express = require('express');
const ExpressError = require('./expressError')

const app = express();

app.use((req,res,next)=>{
  console.clear()
  next()
})


// testing middle ware.
app.get('/', (req,res)=>{
  console.log('request for homepage')
  return res.send('HOME PAGE');
})

function attemptToSaveToDB() {
  throw "Connection Error!"
}

const USERS = [
  { username: "StacysMom", city: "Reno" },
  { username: "Rosalia", city: "R" },
  { username: "shiva", city: "reno" },
]

app.get("/users/:username", function (req, res, next) {
  try {
    const user = USERS.find(u => u.username === req.params.username);
    if (!user) throw new ExpressError("invalid username", 404)
    return next('noooo')   // the code after next() statement will NEVER run. it will move on the next function
    return res.send({ user })
  } catch (e) {
    next(e)
  }
})

app.get('/test-users/:username',(req,res,next)=>{
  try{
    const user_in_db = USERS.find(u => u.username === req.params.username)
    if (!user_in_db){
      throw new ExpressError(212, 'User not found')
    }
    return res.send(user_in_db)
  }
  catch(e){ //catch the error that is thrown
    return next(e)  // go to next possible route, or the next app.use() with the first arg as error object
  }
})

app.get("/secret", (req, res, next) => {
  try {
    if (req.query.password != 'popcorn') {
      throw new ExpressError("invalid password", 303)
    }
    return res.send("CONGRATS YOU KNOW THE PASSWORD");
  } catch (e) {
    next(e)
  }

})

app.get('/testdb', (req,res)=>{
  // try{
  attemptToSaveToDB()
  console.log('came to this line')
  // }
  // catch(e){
    // return res.status(212).send(e)
  // }
  return res.send('db success')
  // res.status(212).send("couldnt save in the database")
})


app.get('/savetodb', (req, res, next) => {
  try {
    attemptToSaveToDB()
    return res.send("SAVED TO DB!")
  } catch (e) {
    return next(new ExpressError("Database Error"))
  }
})

//! Error handler (middle ware). Error handlers should be in the last.
//! You want to handle errors at each route, if nothing catches, then this will run.
// app.use(function (err, req, res, next) { //Note the 4 parameters!
//   // the default status is 500 Internal Server Error
//   let status = err.status || 500;
//   let message = err.msg;

//   // set the status and alert the user
//   return res.status(status).json({
//     error: { message, status }
//   });
// });


// 404 page, if no route was found
app.use((req,res,next)=>{   // this has 3 args so it wont execute when next(e) is called.
  const e = new ExpressError(404, 'Page Not Found at given route')
  return next(e)
  // res.send('404 Page not found');
})

// middleware for error handling
app.use((error, req, res, next)=>{  // this has 4 args, this middle ware exectes for next(e) call backs.
  let status_code = error.status_code || 404;
  let error_msg = error.error_msg;
  console.log(`this is the error object`, error)
  return res.status(status_code).json({error:{error_msg, status_code}})
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
});
