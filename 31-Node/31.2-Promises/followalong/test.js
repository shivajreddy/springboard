const axios = require('axios');

const res = axios.get('http://numbersapi.com/').then(
  // console.log('wtf')
)
  
console.log(res)


// const mypromise = new Promise(executorFunction);

const executorFunction = (resolve, reject) => {
  resolve('Resolved');
  reject('This rejected')
}


// mypromise.then(
//   console.log();
// )


const makeRequest = new Promise((resolve, reject) => {

  const res = axios.get('http://numbersapi.com/');

  console.log(res);
  resolve(res)

});

const res2 = axios.get('http://numbersapi.com/');
console.log(res2);
