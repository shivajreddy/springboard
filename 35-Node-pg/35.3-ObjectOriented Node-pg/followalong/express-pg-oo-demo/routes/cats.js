/** Cat routes for express-pg-oo */

const express = require("express");
const db = require("../db");

const {Cat, MyCat} = require("../models/cat");

const router = new express.Router();

// IMPORTANT: all of these function bodies should really be
// wrapped in a try/catch, where catching an error calls
// next(err) --- this is omitted here for brevity in slides


/** get all cats: [{id, name, age}, ...] */

router.get("/", async function (req, res, next) {
  let result = await db.query("SELECT * FROM cats");
  let cats = result.rows;
  return res.json(cats)
});


/** (fixed) get all cats: [{id, name, age}] */

router.get("/", async function (req, res, next) {
  let cats = await Cat.getAll();
  return res.json(cats);
});


router.get('/all', async(req, res, next)=>{
  let cats = await MyCat.getAllCats();
  return res.status(200).json(cats);
})

router.get('/:id', async(req, res, next)=>{
  try {
    let cat = await MyCat.getCat(req.params.id);
    return res.status(200).json(cat);
  } catch (error) {
    next(error);
  }
})

router.post('/', async(req, res, next)=>{
  try {
    const {name, age} = req.body;
    let cat = await MyCat.newCat(name, age);
    return res.status(201).json(cat);
  } catch (error) {
    return next(error);
  }
})

router.delete('/:id', async(req, res, next)=>{
  try {
    const id = req.params.id;
    await MyCat.deleteCat(id)
    return res.json({message:"delete"})
  } catch (e) {
    return next(e)
  }
})

router.put('/', async(req, res, next)=>{
  try {
    const {id, name, age} = req.body;
    const result = await MyCat.updateCat(id, name, age);
    return res.status(201).json(req.body)
    
  } catch (error) {
    next(error);
  }
})

router.post("/:id/age", async function (req, res, next) {
  let newAge = await Cat.makeOlder(req.params.id);
  return res.json(newAge);
});


module.exports = router;