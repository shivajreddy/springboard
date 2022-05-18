process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app');
const db = require('../db');

const test_book = {
  "isbn": "0691161518",
  "amazon_url": "http://a.co/eobPtX2",
  "author": "Matthew Lane",
  "language": "english",
  "pages": 264,
  "publisher": "Princeton University Press",
  "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
  "year": 2017
}

const test_wrong_book = {
  "isbn": "0691161518",
  "amazon_url": "http://a.co/eobPtX2",
  "author": "Matthew Lane",
  "language": "english",
  "pages": 264,
  "publisher": "Princeton University Press",
  "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
  "year": 2017
}

beforeEach(function () {
  db.query(`
  INSERT INTO books`)
})

// can you spread the keys into the query dictionary

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
