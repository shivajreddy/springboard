process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('./app');
const db = require('./fakeDB');


const test_item = {
  "name": "cheese_ball",
  "price": 30
};


beforeEach(()=>{
  db.push(test_item);
  console.log('testing beforeeach with db of', db)
})

afterEach(()=>{
  db.length = 0;
})


describe('GET /items', ()=>{

  test('return all items', async()=>{
    const response = await request(app).get('/items')
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({items:[test_item]})
  })

})

describe('GET /items/:itemname', ()=>{

  test('return queried item', async()=>{
    const response = await request(app).get(`/items/cheese_ball`)
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(test_item)
  })

  test('wrong item name given', async()=>{
    const response = await request(app).get('/items/some_non_existent_name');
    expect(response.statusCode).toBe(404);
  })

})


// test POST request
describe('POST /items', ()=>{
  const new_item = {
    "item":{
      "name" : "something",
      "price" : 21
    }
  }

  const wrong_item = {
    "item":{
      "wrong_name" : "something",
      "price" : "not a number"
    }
  }

  test('test making a new item', async()=>{
    const response = await request(app).post('/items').send(new_item)
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({"added":new_item.item})
  })

  test('testing wrong input item for creating new item', async()=>{
    const response = await request(app).post('/items').send(wrong_item);
    expect(response.statusCode).toBe(411);
  })

})
