const express = require('express');
const ExpressError = require('./expresserror');

const app = express();

// clean console on every request
app.use((req,res,next)=>{
  console.clear();
  next();
})

const nums = []     // global array for collecting all numbers

//! Routes
app.get('/', function route_homePage(req,res,next){
  return res.send('Welcome to Exercise homepage');
})


//  single function to catch errros in the input
function catchErrors(req){

  if(!req.query.nums){    // no 'nums' in the query object
    throw new ExpressError('nums as query key and numbers as value is required', 400)
  }

  let nums_array = req.query.nums.split(',');
  for(let item of nums_array){    // check if all given values are numbers
    if (isNaN(item)){
      throw new ExpressError(`${item} is not a number`, 400)
    }
    nums.push(parseInt(item));    // pushing every int to the nums array
  }
}

//! Functions to calculate mean, median, mode
const calc_mean = (nums_array) =>{
  const nums_sum = nums.reduce((a,b)=>a+b, 0);    // all nums are added at this point, calculate sum.
  const mean = nums_sum / nums.length;    // calculate mean
  return mean
}

const calc_median = (nums_array) =>{
  nums_array.sort();
  let median
  if (nums.length % 2 === 0){
    median = ( nums[nums.length/2] + nums[nums.length/2 -1] ) / 2;
  }
  else{
    median = nums[ nums.length / 2 -.5]
  }
  return median;
}

const calc_mode = (nums_array)=>{
  let hashmap = {};
  let highest;
  for (let num of nums_array){
    if (hashmap[num] == undefined){hashmap[num]=0}
    hashmap[num] += 1

    if (hashmap[num] > hashmap[highest] || highest === undefined){
      highest = num;
    }
  }
  return highest;
}


// mean route -> GET request
app.get('/mean', (req,res,next)=>{

  try{
    catchErrors(req);
    const mean = calc_mean(nums);
    const result = {    // create result object
        operation : 'mean',
        value : mean
    }
    return res.status(200).json({response:result});
  } catch(e){
    return next(e);
  }

})

// median route -> GET request
app.get('/median', (req,res,next)=>{
  try{
    catchErrors(req);
    const median = calc_median(nums);
    const result = {
      operation : 'median',
      value : median
    }
    return res.status(200).json({response:result});
  } catch(e){
    return next(e);
  }
})

// mode route -> GET request
app.get('/mode', (req,res,next)=>{
  try{
    catchErrors(req);
    const mode = calc_mode(nums);
    const result = {
      operation : 'mode',
      value : mode
    }
    res.status(200).json({response:result});
  } catch(e){
    return next(e);
  }
})

// all operations route
app.get('/all', (req,res,next)=>{
  try{
    catchErrors(req);
    const mean = calc_mean(nums);
    const median = calc_median(nums);
    const mode = calc_mode(nums);

    const result = {
      operation : 'all',
      mean : mean,
      median : median,
      mode : mode,
    }
    res.status(200).json({response:result})

  } catch(e){
    return next(e);
  }
})

// --------------------------- //
// Handle 404
app.use((req,res,next)=>{
  const error_404 = new ExpressError('Page Not Found :(', 404);
  next(error_404);
})

// Global Error Handler
app.use((error ,req ,res ,next)=>{
  let final_msg = error.msg || 'ERROR - NO error thrown in route'
  let final_status = error.status || 404;
  console.error(final_status, final_msg)
  console.error(error.stack)
  return res.status(final_status).send(final_msg);
})

// app port
const app_port = 1000;
app.listen(app_port, (req,res)=>{
  console.log(`App started. Listening to Port ${app_port}`);
})