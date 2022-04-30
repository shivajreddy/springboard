// first server
const express = require('express')
const app = express();
const port = 3000


// listen to JSON body incoming request
app.use(express.json());  // pass input data as json
app.use(express.urlencoded({extended:true}))  // pass this as form data, if the input is form data

app.get('/', (req,res)=>{
	res.send('Hello from Express..👋')
})

app.get('/home', (req,res)=>{
  console.log(req);
  res.send('Home page 🏡')
})

// understanding body sent on post request
app.post('/testpost', (req,res)=>{
  console.log(req.body)
  return res.send(req.body)
  res.send('test test test')
})


const greetings = {
  en: 'hello',
  fr: 'bonjour',
  ic: 'halloo',
  tel: 'namasthe',
  tam: 'vanakam'
}

app.get('/:language/:country/:state', (req,res)=>{
  console.log(req.params);
  return res.send(`Given req params: ${[req.params.language, req.params.country, req.params.state]}`)
})


app.get('/search', (req,res)=>{

  console.log(req.query)

  // const {color, sort} = req.query

  // setting default values
  const {color='pink', sort='top'} = req.query

  return res.send(`queries are. color=${color}, sort=${sort}`)

})

app.get('/show-headers', (req,res)=>{
  console.log('Here are the raw headers ----------')
  console.log(req.rawHeaders)
  console.log('Here are the express generate headers ----------')
  console.log(req.headers)
})











// Always at the bottom of the file
app.listen(port,()=>{
	console.log(`Express app is now listening to ${port}`)
})