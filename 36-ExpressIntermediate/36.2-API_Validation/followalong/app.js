const express = require('express');
const app = express();
const ExpressError = require('./expresserror');


// Middle ware
app.use((req, res, next) => {
  console.clear();
  return next();
})
app.use(express.json());


// Routes
const router = require('./routes/router');
app.use('/router', router);


const jsonschema = require('jsonschema');
const myschema = require('./schemas/myschema.json');

app.get('/test', (req, res, next) => {
  const result = jsonschema.validate(
    { name: 'shivareddy', phone: "3528704984" }, myschema
  );
  if (!result.valid) {
    const list_of_errors = result.errors.map(error => error.stack);
    let error = new ExpressError(list_of_errors, 400);
    console.error(error)
  }
  return res.send(result.valid);
});



// 404 Page
app.use((req, res, next) => {
  const error_404_page = new ExpressError('URL not found :(', 404);
  return next(error_404_page);
});

// Global Error handler
app.use((error, req, res, next) => {
  const global_msg = error.msg || "Error caught at default handler";
  const global_status = error.status || 404;
  console.error(error);
  return res.status(global_status).send(global_msg);
})


module.exports = app;