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

beforeEach(async function () {
  await db.query(`
  INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year)
  VALUES( $1, $2, $3, $4, $5, $6, $7, $8)`,
    [...Object.values(test_book)]
  );

})

afterEach(async function () {
  // delete all rows in the books table
  await db.query(`
  DELETE FROM books`)
})

afterAll(async () => {
  await db.end();
})


describe('get route test', () => {
  test('get request for /books', async () => {
    const response = await request(app).get('/books/test');
    expect(response.statusCode).toBe(200);
  })
})
