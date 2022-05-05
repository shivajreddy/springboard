process.env.NODE_ENV='test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');

let test_user;

beforeEach(async()=>{

  const result = await db.query(
    `INSERT INTO users (name, type) VALUES($1, $2) RETURNING id, name, type`,
    ['Peanut', 'ui eng']
  )
  test_user = result.rows[0];
})


afterEach(async()=>{
  const result = await db.query(
    'DELETE FROM users'
  );
})


afterAll(async()=>{
  await db.end();   // closing the db connection after tests
})


// GET all users test
describe('GET /users', ()=>{

  test('GET request to /users', async()=>{
    const response = await request(app).get('/users/all');
    // #1
    expect(response.statusCode).toBe(200);
    // #2
    console.log(response.body);
    expect(response.body).toEqual([test_user]);
  })
})

