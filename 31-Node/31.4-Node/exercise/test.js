const fs = require('fs');


fs.writeFile('one.txt', 'this goes there', {encoding:'utf-8'},(err)=>{
  if (err){
    console.log('couldnt write');
  }
  else{
    console.log(`succesffuly wrote `);
  }
})


