const express = require("express");
const app = express();

const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// URL parameters
app.get("/url/:color", (req, res) => {
  return res.send(req.params.color);
});

// Headers
app.get("/headers", (req, res) => {});

app.listen(PORT, () => {
  console.log("App started listening at ", PORT);
});
