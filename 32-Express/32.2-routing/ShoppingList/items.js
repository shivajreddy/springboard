const express = require('express');
const router = express.Router();
const ExpressError = require('./expresserror');
const db = require('./fakeDB');


const item = {
  name : "startitem",
  price : 20
}

// db.push(item)

// route to get all items
router.get('/', (req,res,next)=>{
  const all_items = 1
  return res.status(200).json({items: db});
})


// route to get single item
router.get('/:item_name', (req, res, next)=>{
  const given_name = req.params.item_name;
  try{
    if(!given_name){throw new ExpressError('no string param given', 400)};

    const found_item = db.find(item=>item.name===given_name);
    if (!found_item){throw new ExpressError(`No item for ${given_name}`, 404)}

    return res.status(200).json(found_item);
  } catch(e){
    return next(e);
  }
})


// post request to add item
router.post('/',(req,res,next)=>{
  /*
  The body of the post request should be 
  {
    "item": {
      "name" : "something",
      "price":interge
    }
  }
  */ 
 const given_item = req.body.item;
 console.log('testing with this', given_item, req.body)
  try{

    if(!given_item){throw new ExpressError('new item format is wrong',411)}
    // check for new item's types
    if (!given_item.name || !given_item.price || typeof(given_item.price) !== 'number' || typeof(given_item.name) !== 'string'){
      throw new ExpressError('new item keys and values are wrong', 411);
    }

    db.push(given_item);
    return res.status(201).json({"added": given_item})

  } catch(e){
    return next(e)
  }
})


// PATCH request to modify an item
router.patch('/:item_name',(req,res,next)=>{
  /*
  The body of the post request should be 
  {
    "item": {
      "name" : "something",
      "price":interge
    }
  }
  */ 
  try{
  console.log('this is the given name', req.params.item_name);
  const given_name = req.params.item_name;
  if (!given_name){throw new ExpressError('no string param given', 400)}

  const given_item = req.body.item;
  if(!given_item){throw new ExpressError('new item format is wrong',401)}
  // check for new item's types
  if (!given_item.name || !given_item.price || typeof(given_item.price) !== 'number' || typeof(given_item.name) !== 'string'){
    throw new ExpressError('new item keys and values are wrong', 411);
  }

  const found_item = db.find(item=>item.name===given_name)
  if(!found_item){throw new ExpressError(`item with name ${given_name} doesn't exist`, 412)}
  found_item.name = given_item.name;
  found_item.price = given_item.price;
  return res.status(200).json({"updated": found_item})
  } catch(e){
    return next(e);
  }
})


// DELETE request
router.delete('/:item_name',(req,res,next)=>{

  const given_name = req.params.item_name;
  try{
    if(!given_name){throw new ExpressError('no string param given', 400)};

    const found_item = db.find(item=>item.name===given_name);
    const found_item_idx = db.findIndex(item=>item.name===given_name)
    if (found_item_idx === -1){throw new ExpressError(`No item for ${given_name}`, 444)}
    db.splice(found_item_idx,1)
    return res.status(200).json({message:"deleted"});
  } catch(e){
    return next(e);
  }

})


module.exports = router;
