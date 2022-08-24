const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("yoo shop2");
});

module.exports = app;
