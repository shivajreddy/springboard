const express = require('express');
const router = express.Router();

// all these routes start with 'users'

const users_db = ['shiva', 'reddy']

router.get('/all', (req,res)=>{
  return res.status(200).send(`All users = ${users_db}`)
})

router.get('/:name', (req,res)=>{
  const u = users_db.find(u=>u===req.params.name);
  if (u){
    return res.status(200).send(`✅ ${req.params.name} is in ${users_db}`)
  }
  else{
    return res.status(404).send(`❌ ${req.params.name} NOT FOUND${users_db}`)
  }
  
})

router.get('/:name', (req,res)=>{
  const u = users_db.find(u=>u===req.params.name);
  if (u){
    return res.status(200).send(`✅ ${req.params.name} is in ${users_db}`)
  }
  else{
    return res.status(404).send(`❌ ${req.params.name} NOT FOUND${users_db}`)
  }
  
})

module.exports = router;