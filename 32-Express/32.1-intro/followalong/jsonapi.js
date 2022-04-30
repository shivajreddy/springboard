const express = require('express');

const app = express();
const port = 2020
app.use(express.json());

const candies = [
  {name: 'snickers',
  quantity: 20,
  price: 1.5},

  {name: 'bounty',
  quantity: 10,
  price: 2}
]

app.get('/candies', (req, res)=>{
  // return res.send(`${candies}`)
  // return res.json(`${candies}`)
  return res.json(candies)
  // return res.send(candies)
})

// test status code
app.get('/status', (req,res)=>{
  const test = 'test string as json'
  res.status(213);
  res.json(test);
})


app.post('/candies', (req,res)=>{
  candies.push(req.body)
  res.json(candies)
})


app.listen(port,()=>{console.log(`app listening to ${port}`)});
