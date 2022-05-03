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


// test PATCH request
describe('PATCH /items/:item_name', ()=>{
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

  test('try updating non existent item', async()=>{
    const response = await request(app).patch(`/items/${test_item.name}`).send(new_item);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({"updated":new_item.item});
  })

  // test('no item in the given item', async()=>{
    // const response = await request(app).patch(`/items/`).send(new_item);
    // expect(response.statusCode).toBe(400);
  // })


  test('test with wrong format of item', async()=>{
    const response = await request(app).patch(`/items/${test_item.name}`).send(wrong_item);
    expect(response.statusCode).toBe(411);

  })

  test('test to change non existent item', async()=>{
    const resposne = await request(app).patch(`/items/non_existing_item`).send(new_item);
    expect(resposne.statusCode).toBe(412);
  })
})


// test DELETE request
describe('DELETE /items/:item_name', ()=>{
  test('delete an existing item', async()=>{
    const response = await request(app).delete(`/items/${test_item.name}`);
    expect(response.statusCode).toBe(200);
  })

  test('delete a non-existing item', async()=>{
    const response = await request(app).delete(`/items/nonexisitngitem`);
    expect(response.statusCode).toBe(444);
  })
})
