//! Step 2
const fs = require('fs');
const http = require('http');
const axios = require('axios');


// no input
if (process.argv.length < 3) {
  console.log('Please give a path or URL input');
  process.exit(1)
}


const input = process.argv[2];


// FILE PATH
const cat = (path) => {

  fs.readFile(path,
    {encoding:'utf-8'},
    (err,data) => {
      if (err){
        console.log(`Couldn't find the file at location:|${path}|`);
        console.log(err);
        process.exit(1);
      }
      else{
        console.log(`Here are the |${path}| contents:`);
        return console.log(data);}
      }
    )
}


// URL
const webCat = (url) => {

  const response = axios.get(input)
    .then(response => {
      if (response.status === 200){
        return console.log(response.data)
      }
    })
}


// validating if url, using first 4 char's
if (input.slice(0,4) === 'http' || input.slice(0,3) === 'www'){
  webCat(input);
}
else{
  cat(input);
}
