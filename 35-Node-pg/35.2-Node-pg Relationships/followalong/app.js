const express = require('express');
const app = express();
const ExpressError = require('./expresserror');

// Middle ware
app.use(express.json());
app.use((req, res, next) => {
  console.clear();
  next();
})

// Routes
const users = require('./routes/users');
app.use('/users', users);
const messages = require('./routes/messages');
app.use('/messages', messages);

// home route
app.get('/', (req, res, next) => {
  return res.send('Home page');
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
  return res.status(global_status).send(global_msg);
})


module.exports = app;