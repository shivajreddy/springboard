const fs = require('fs');


const cat = (path) => {

  // no input
  if ( process.argv.length < 3) {
    return console.log('Make sure to give a file input');
  
  }

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

cat(process.argv[2]);