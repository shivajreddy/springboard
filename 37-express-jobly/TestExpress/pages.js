const express = require("express");
const ExpressError = require("./ExpressError");

const router = express.Router();

// router that represents end points of diff pages

router.get("/home", (req, res) => {
  return res.status(200).json({ result: "Welcome to home page" });
});

router.get("/about", (req, res) => {
  return res.status(200).json({ result: "this is my aobut page" });
});

const admins = ["shiva", "england", "boo", "sunny"];

router.get("/admin", (req, res, next) => {
  const given_name = req.body.adminname;
  try {
    if (!given_name) {
      throw new ExpressError(400, `${given_name} is un-authorized`);
    }
    return res.status(200).json({ result: "You are an admin" });
  } catch (error) {
    return res.send({ error });
  }
});

module.exports = router;
