const app = require('./app');
// import app from "./app";

const app_port = 3000;
app.listen(app_port, (req,res)=>{console.log(`App started, listening to ${app_port}`)});
