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

// test invoice object
const test_invoice = {
  comp_code : "nflx",
  amt : 999,
  paid : false,
  paid_date : null
}
const {comp_code, amt, paid, paid_date} = test_invoice;

// test setup and teardown
beforeEach(async()=>{
  const comp_result = await db.query(
    `INSERT INTO companies
    (code, name, description)
    VALUES ($1, $2, $3)
    RETURNING code, name, description`
    , [code, name, description]
  );
  const result = await db.query(
    `INSERT INTO invoices
    (comp_code, amt, paid, paid_date)
    VALUES ($1, $2, $3, $4)
    RETURNING comp_code, amt, paid, paid_date`
    , [comp_code, amt, paid, paid_date]
  )
  // console.log('this is the result', result.rows)
})

afterEach(async()=>{
  // delete the entire table
  await db.query(
    `DELETE FROM companies`
  )
  await db.query(
    `DELETE FROM invoices`
  )
})

afterAll(async()=>{
  // need to end the database connection.
  await db.end();
})

// GET request tests
describe('GET route testing', () => { 

  test('GET request for /invoices/all', async()=>{
    const response = await request(app).get('/invoices/all');
    expect(response.status).toBe(200);
    expect(response.body).toEqual( {invoices: [
      {
        comp_code : comp_code,
        amt : amt,
        paid : paid,
        paid_date : paid_date,
        // add_date : expect.any(new Date("2022-05-06T04:00:00.000Z")),
        add_date : expect.anything(),
        id : expect.any(Number)
      }
    ]});
  })

});

// POST request testing
