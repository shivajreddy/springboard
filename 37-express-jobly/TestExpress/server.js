const express = require("express");
const app = express();

app.get("/", function (req, res) {
  return res.send("Hello World!");
});

app.get("/some", (req, res) => {
  return res.send("you got some");
});

// Port
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log("Server started at ", PORT);
});
