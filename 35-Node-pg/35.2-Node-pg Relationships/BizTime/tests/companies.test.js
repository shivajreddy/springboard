process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app');
const ExpressError = require('../expressError');
const db = require('../db');

// Test company entry in the 'companies' table
const test_company = {
  code : 'nflx',
  name : 'Netflix',
  description : 'Worlds best streaming platform'
}
const {code, name, description} = test_company;

// test setup and teardown
beforeEach(async()=>{
  await db.query(
    `INSERT INTO companies
    (code, name, description)
    VALUES ($1, $2, $3)
    RETURNING code, name, description`
    , [code, name, description]
  )
  // console.log(db)
})

afterEach(async()=>{
  // delete the entire table
  await db.query(
    `DELETE FROM companies`
  )
})

afterAll(async()=>{
  // need to end the database connection.
  await db.end();
})


// GET request tests
describe('GET test group', () => { 

  test('GET request for /companies/all', async()=>{
    const response = await request(app).get('/companies/all');
    expect(response.status).toBe(200);
    expect(response.body).toEqual( {companies:[test_company]} );
  })

});


// POST request testing
