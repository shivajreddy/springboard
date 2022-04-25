const faker = require('faker');
const axios = require('axios');
const fs = require('fs');

// const helper = require('./helper');
const {add, mult, sub} = require('./helper')

// console.log(faker.name.findName());
// console.log(process.env);
// console.log(process);

// process.on('exit', ()=>{
//   console.log('this exited');
// })

// setInterval(() => {
//   console.log('hellooooo');
// }, 1000);

// setInterval(() => {
//   process.exit(2)
// }, 6000);


// console.log(helper.add(10,20));
// console.log(helper.sub(20,10));
// console.log(helper.mult(10,20));

console.log(add(10,20));
console.log(sub(10,20));
console.log(mult(10,20));

fs.readFile('helper.js', 'utf-8', function(err,data){
  if (err){
    console.log(`no file found at ${data}. Error=${err}`);
  }
  else{
    console.log("found the file");
    console.log(data);
  }
});
