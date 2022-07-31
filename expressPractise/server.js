const { response } = require("express");
const express = require("express");
const app = express();
const config = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/url-params/:fname", (req, res) => {
  return res.status(200).json({ response: req.params.fname });
});

app.get("/query-end-point", (req, res) => {
  console.log(req.query);
  return res.status(200).json({ response: req.query });
});

app.get("/body-end-point", (req, res) => {
  res.status(200).json({ response: req.body });
});

// Assignment 1
const mathRouter = require("./math");
app.use("/math", mathRouter);

app.get("/mean", (req, res) => {
  const nums = res.send(req.params.nums);

  const result = 21;

  const response = {
    operation: "mean",
    value: result,
  };

  return res.json({ response });
});

app.listen(config.PORT, () => {
  console.log(`Example app listening at http://localhost:${config.PORT}`);
});
