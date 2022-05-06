const app = require('../app');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  return res.status(200).send('Router Home Page');
})



module.exports = router;