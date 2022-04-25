//! Step 3
const fs = require('fs');
const axios = require('axios');

const args = process.argv;
let flag = undefined;
let path = args[2];
let output_file;

if (args[2] === '--out') {
  flag = true;
  path = args[4];
  output_file = args[3]
}

const writeData = (outputfilepath, inputdata) => {
  fs.writeFile(outputfilepath, inputdata, 'utf-8', (err)=>{
    if (err){console.log(`Counlt write due to ${err}`);}
    else{console.log(`Successfull wrote onto ${output_file}`);}
  })
}

// FILE PATH
const cat = (path) => {

  fs.readFile(path, {encoding:'utf-8'}, (err,content) => {
      if (err){
        console.log(`Couldn't find the file at location:|${path}|`);
        console.log(err);
      }
      else{

        // write if there is a flag
        if (flag){
          writeData(output_file, content)
        }

        return console.log(content);
      }
      }
    )
}


// URL
const webCat = async (url) => {
  const response = await axios.get(path)

  if (response.status === 200){

    // write if there is a flag
    if (flag) {
      writeData(output_file, response.data)
    }
  }
  else{
    console.log(`Some problem getting response`);
  }
  
}


// Evaluate if the give input is url or string
if (path.slice(0,4) === 'http' || path.slice(0,3) === 'www') {
  webCat(path);
}
else{
  cat(path);
}
