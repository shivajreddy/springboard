process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app');
const db = require('../db');


beforeEach(function () {

})

afterEach(function () {

})

afterAll(async () => {
  await db.end();
})


describe('get route test', () => {
  test('get request for /books', async () => {
    const response = await request(app).get('/books/test');
    expect(response.statusCode).toBe(333);
  })
})
