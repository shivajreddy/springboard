const express = require('express');
let axios = require('axios');
var app = express();
const ExpressError = require('./expresserror');

app.use(express.json());

function make_git_request(dev_name){
  const response = axios.get(`https://api.github.com/users/${dev_name}`);
  return response
}

app.post('/p2', async function(req,res,next){
  try{
    if (!req.body.developers){throw new ExpressError('no developer object in body', 404)};

    const devs = req.body.developers.map(name => make_git_request(name))
    const result = [];
    for await (const dev of devs){
      result.push({name:dev.data.name, bio:dev.data.bio});
    }
    return res.send(JSON.stringify(result));
  } catch(e){
    next(e)
  }
})


// old code fixed using Promise.all()
app.post('/', async function(req, res, next) {
  try {
    console.log(`mapping for these devs`, req.body.developers)
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    const resolved = await Promise.all(results);
    let out = resolved.map((r) => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});

// Global Error handler
app.use((error, req, res, next)=>{
  return res.status(error.status).send(error.msg)
})


app.listen(3000, ()=>{`App started at port 3000`});

