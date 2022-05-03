const process = require('process');
const fs = require('fs');
const axios = require('axios');

const file_name = process.argv[2];

if(!file_name){
  console.error('Please give a file name as the arg');
  process.exit(1);
}

// 
fs.readFile(file_name, {encoding:'utf-8'}, (err, data)=>{
  if(err){
    console.error('Couldnt read file due to', err);
    process.exit(1);
  }

  data.split(/\r?\n/).forEach(line=>{
    get_data(line);
  })

  // get_data(data.split(/\r?\n/)[0]);

})


async function get_data(url){
  try{

  const response = await axios.get(url)
  const html_data = response.data;

  const output_file_name = make_file_name(url);

  fs.writeFile(output_file_name, html_data, {encoding:'utf-8'}, (err)=>{
    if (err){
      console.error(`Problem writing into file ${output_file_name}`)
      process.exit(1)
    }
    console.log(`Finished writing in to ${output_file_name}`)
  })

  } catch(e){
    console.error(`Couldn't make axios request to ${url}`)
  }
}


function make_file_name(name){
  return name.split('//')[1].split('/')[0]
}
