const app = require('./app');

const app_port = 3000;
app.listen(app_port,()=>{console.log(`App started, listening to ${app_port}`)});