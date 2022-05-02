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


// test set 1 -> 
describe ('another GET /cats', ()=>{
  test('GET request for /cats', async ()=>{
    const response = await request(app).get('/cats');
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({cats:[pickles]})
  })
})

// test set 2 -> 
describe('POST /cats', ()=>{

  test('POST request to /cats', async ()=>{
    const new_cat = {name:'pink boo'}
    const response = await request(app).post('/cats').send(
      new_cat
    )
    expect(response.statusCode).toBe(201);
    debugger;
    expect(response.body).toEqual({cat:new_cat})

  })
})

// path tests
describe('PATCH /cats/:name', ()=>{

  const test_cat = {name: 'testpinky'}
  test('patch test to /cats/:name', async ()=>{
    const response = await request(app).patch(`/cats/${pickles.name}`).send(
      test_cat
    )
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({cat: test_cat})
  })

  test('should return 404 for invalid cat name', async ()=>{
    const resposne = await request(app).patch('/cats/wtfname').send(
      test_cat
    ) 
    expect(resposne.statusCode).toBe(404)
  })
})

// delete tests
describe('DELETE /cats/:name', ()=>{

  test('delete request to /cats', async()=>{
    const response = await request(app).delete(`/cats/${pickles.name}`)
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({message:"Deleted"});
  })

  test('404 for deleting non existent cat', async()=>{
    const response = await request(app).delete(`/cats/nocatlikethis`)
    expect(response.statusCode).toBe(404);
  })
})
