const express = require('express');
const ExpressError = require('../expresserror');
const app = require('../app');
const db = require('../db')

const table = 'users';

const router = express.Router();


// GET all users
router.get('/all', async(req, res, next)=>{
  try{
    const search_term = req.query.search;
    const users = await db.query(
      `SELECT * FROM users` 
    )
    return res.json(users.rows);

  } catch(e){
    res.send(e.stack)
    next(e)
  }
})

// get user of an id
router.get('/:user_id', async(req, res, next)=>{
  try {
    const usr_id = req.params.user_id;
    if(!usr_id){throw new ExpressError('usr id is not given', 404)};
    const query_result = await db.query(
      `SELECT * FROM users WHERE id=$1`, [usr_id]
    )
    return res.status(200).send(query_result.rows);
  } catch (e) {
    
  }
})



// Add new user
router.post('/new-user', async(req, res, next)=>{
  try{
    const {name, type} = req.body;
    const result = await db.query(
      `INSERT INTO users (name, type) VALUES ($1, $2) RETURNING *`, [name, type]
    )
    return res.status(201).json(result)
  } catch(e){
    next(e);
  }
})

// Update existing user
router.patch('/:user_id', async(req, res, next)=>{

  try{
    if (!req.params.user_id){throw new ExpressError('give some user id'), 404}

    // const {id} = req.params;
    const {name, type} = req.body;

    const get_user = await db.query(
      `SELECT * FROM USERS WHERE id=$1`, [req.params.user_id]
    )
    if (!get_user){throw new ExpressError(`There is no user with the given id -${req.params.user_id}`, 404)}

    const result = await db.query(
      `UPDATE users SET  name=$1, type=$2 WHERE id=$3 RETURNING id, name, type`, [name, type, req.params.user_id]
    );

    return res.status(200).json(result.rows);

  } catch(e){
    next(e);
  }

})


//Delete an user
router.delete('/:user_id', async (req, res, next)=>{
  try{

    const user_id = req.params.user_id;

    if(!user_id){throw new ExpressError('no user id given to delete', 404)};

    const query_result = await db.query(
      `DELETE FROM users WHERE id=$1 RETURNING id, name, type`, [user_id]
    );

    return res.status(200).json(query_result.rows);

  } catch(e){
    next(e);
  }
})



module.exports = router;
