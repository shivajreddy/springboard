const baseURL = 'http://numbersapi.com'
const favNum = 2
const $numberFactsDiv = $('.number-facts')
const generateButton = $('button')

// by making promise object
function makeRequest(){
  return new Promise((resolve, reject) => {
    const response = axios.get(`${baseURL}/${favNum}`)
    resolve(response)
  })
}


generateButton.on('click', (e)=>{

  makeRequest().then((response)=>{$numberFactsDiv.append(`<p>${response.data}</p>`)})
    .then(()=>{
      makeRequest().then((response)=>{$numberFactsDiv.append(`<p>${response.data}</p>`)})
    })
    .then(()=>{
      makeRequest().then((response)=>{$numberFactsDiv.append(`<p>${response.data}</p>`)})
    })
    .then(()=>{
      makeRequest().then((response)=>{$numberFactsDiv.append(`<p>${response.data}</p>`)})
    })

})
