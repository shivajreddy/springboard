const express = require("express");
const ExpressError = require("./expresserror");
const middleware = require("./middleware");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.clear();
  next();
});

// import routes
const myroutes = require("./myroutes");
app.use("/users", myroutes);
const catroutes = require("./cats");
app.use("/cats", catroutes);

// middleware
app.use(middleware.logger);
// app.use(middleware.checkPassword);

app.get("/", function route_homePage(req, res, next) {
  return res.send("follow along routing 🧐");
});

app.get("/secrets/:password", middleware.checkPassword, (req, res, next) => {
  return res.send("Yay welcome");
});

app.get("/private/:password", middleware.checkPassword, (req, res, next) => {
  return res.send("Private welcome");
});

app.use((req, res, next) => {
  return next(new ExpressError("page not found :(", 404));
});

// global error handler
app.use((error, req, res, next) => {
  console.error("global error object", error);
  return res.status(error.status).send(error.msg);
});

module.exports = app;
