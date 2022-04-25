const faker = require('faker');
const axios = require('axios');
// const helper = require('helper');
const helper = require('./helper');

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


console.log(helper.add(10,20));
console.log(helper.sub(20,10));
console.log(helper.mult(10,20));
