const express = require("express");
const ExpressError = require("./ExpressError");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({ response: "Math home page" });
});

function calcMean(a, b, c, ...d) {
  console.log(d);
}

router.get("/:operation", (req, res) => {
  switch (req.params.operation) {
    case "mean":
      return res.status(200).send("this is mean operation");
    case "median":
      return res.status(200).send("this is median operation");
    case "mode":
      return res.status(200).send("this is mode operation");
    default:
      break;
  }
});

module.exports = router;
