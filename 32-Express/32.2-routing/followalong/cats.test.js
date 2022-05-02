process.env.NODE_ENV = "test";
const request = require('supertest');

const app = require('./app');
const db = require('./fakeDb');
const cats = require('./cats');

let pickles = {name:'pickles'}

beforeEach(function(){
  db.push(pickles);
})

afterEach(function(){
  db.length = 0; // instead of creating a new empty array
})

// testing starts
describe('GET /cats', ()=>{
  test('should return all cats', async ()=>{
    const res = await request(app).get('/cats');
    expect(res.statusCode).toBe(200);
  })
})

