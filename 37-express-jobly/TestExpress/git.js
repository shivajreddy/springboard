const express = require("express");
const ExpressError = require("./ExpressError");
const axios = require("axios");

const router = express.Router();

// routes to get the data

router.get("/get", async (req, res, next) => {
  // get the details from req
  const usernames = req.body.developers;
  // console.log("this is the type of", usernames.length, typeof usernames);

  try {
    if (!usernames.length || typeof usernames !== "object") {
      throw new ExpressError(
        400,
        "Not correct data type or empty array submitted"
      );
    }
  } catch (error) {
    return next(error);
    // return res.send({error });
  }

  const dev_name = usernames[0];

  // Make a git api call
  const response = await axios.get(`https://api.github.com/users/${dev_name}`);
  console.log(response.data);
  const data = response.data;

  return res.status(200).json({ data });
});

module.exports = router;
