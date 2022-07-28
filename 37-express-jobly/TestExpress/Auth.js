const express = require("express");

const router = express.Router();

router.get("/some", (req, res) => {
  return res.send("This is something from the router");
});

module.exports = router;
