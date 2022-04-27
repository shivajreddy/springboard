const baseURL = 'http://numbersapi.com'
const favNum = 2

const makeRequest = $.get(`${baseURL}/${favNum}`)

const totalFacts = (times) => {
  for (let i=0; i<times; i++){

    $.get(`${baseURL}/${favNum}?json`).then(
      data => {console.log(data);}
    )
    
  }
}

const generateButton = $('button')
console.log(generateButton);

generateButton.on('click', (e)=>{
  // console.log('button pressed');
  totalFacts()
})


makeRequest.catch(
  err => {
  console.log(`Counldn't make the request, due to:`);
  console.log(err);
  console.log(`End`);
})

const $numberFactsDiv = $('.number-facts')


// test