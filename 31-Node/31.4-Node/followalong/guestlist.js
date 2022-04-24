const faker = require('faker');
const axios = require('axios');

// console.log(faker.name.findName());
// console.log(process.env);
// console.log(process);

process.on('exit', ()=>{
  console.log('this exited');
})

setInterval(() => {
  console.log('hellooooo');
}, 1000);

setInterval(() => {
  process.exit(2)
}, 6000);
