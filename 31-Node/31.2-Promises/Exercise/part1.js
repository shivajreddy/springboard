const axios = require('axios');
const baseURL = 'http://numbersapi.com'
const favNum = 2

// const makeRequest = $.get(`${baseURL}/${favNum}`)

// by making promise object
function makeRequest(){
  return new Promise((resolve, reject) => {
    // const response = $.get(`${baseURL}/${favNum}`)
    const reqponse = axios.get(`${baseURL}/${favNum}`)
    console.log(response)
    resolve(response)
  })
}

makeRequest().then((response)=>{
  console.log(`Successful request`)
  console.log(response)
})


// by using axios to send get request

const totalFacts = (times) => {
  for (let i=0; i<times; i++){

    $.get(`${baseURL}/${favNum}?json`).then(
      data => {console.log(data);}
    )
    
  }
}

const generateButton = $('button')

generateButton.on('click', (e)=>{
  // console.log('button pressed');
  totalFacts()
})


// makeRequest.catch(
//   err => {
//   console.log(`Counldn't make the request, due to:`);
//   console.log(err);
//   console.log(`End`);
// })

const $numberFactsDiv = $('.number-facts')
