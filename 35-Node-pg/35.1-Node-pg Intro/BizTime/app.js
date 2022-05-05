/** BizTime express application. */
const express = require("express");

const app = express();
const ExpressError = require("./expressError")

app.use(express.json());

app.get('/', (req, res, next)=>{
  res.send('Hello');
})

// Routes
const companies = require('./routes/companies');
app.use('/companies', companies);
const invoices = require('./routes/invoices');
app.use('/invoices', invoices);


/** 404 handler */
app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.error(err)
  return res.json({
    error: err,
    message: err.message
  });
});

module.exports = app;