// starting point
const app = require('./app');


// port 
const app_port = 2000;
app.listen(app_port, ()=>{
  console.log(`App started & listening at ${app_port}`);
})
