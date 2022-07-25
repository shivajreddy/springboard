const express = require("express");
const app = express();

const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("App started listening at ", PORT);
});
