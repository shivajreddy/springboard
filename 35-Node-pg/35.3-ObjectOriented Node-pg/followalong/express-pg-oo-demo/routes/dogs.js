const express = require("express");
const MyDog = require("../models/dog");
const router = new express.Router();


router.get('/all', async (req, res, next) => {
  const dogs = await MyDog.getAll();
  // dogs.forEach(dog => dog.speak());
  return res.status(200).json(dogs);
});


router.get('/:id', async (req, res, next) => {
  try {
    const dog = await MyDog.getDog(req.params.id);
    console.log('shit is happening')
    return res.status(200).json(dog);
  } catch (error) {
    next(error);
  }
})

router.post('/new', async (req, res, next) => {
  try {
    const {name,age} = req.body;
    const dog = await MyDog.newDog(name, age);
    return res.status(201).json({
      created: dog
    });
  } catch (error) {
    next(error)
  }
});

router.delete('/remove-dog/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    let dog = await MyDog.getDog(id);
    const result = await dog.remove();
    return res.json({ deleted : result})
  } catch (error) {
    next(error)
  }
})


router.patch('/age/:id', async(req, res, next)=>{
  try {
    let dog = await MyDog.getDog(req.params.id); 
    dog.age += 1;
    await dog.save();
    res.json(dog);

  } catch (error) {
    next(error);
  }
})

router.patch('/rename/:id', async(req, res, next)=>{
  try {
    const dog = await MyDog.getDog(req.params.id);
    dog.name = req.body.name;
    dog.save();
    return res.send(dog);
  } catch (error) {
    next(error);
  }
})



module.exports = router;