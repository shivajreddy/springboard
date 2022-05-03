### Conceptual Exercise

Answer the following questions below:

## What are some ways of managing asynchronous code in JavaScript?
- Promises -> promise chaining is terrible. code blocks inside codeblocks.
Async, Await -> Introduced in ES2017. Inside an async function, every thing runs synchronously except the code after 'await' statement.
using 3rd party libraries like axios. Axios is built upon promises.

## What is a Promise?
- Promise is an object that has three states- Pending, Resolved, Rejected. Promise object is initiated with the Pending state. Promise is the guarentee that there is a future result.
Once the state of the promise changes from 'Pending' to either 'Resolved' or 'Rejected', the callback function provided to the promise is executed.

## What are the differences between an async function and a regular function?
- Inside an async function, every thing runs synchronously except the code after 'await' statement.
If there is no 'await' statement inside the async function, the function runs like a normal function.

## What is the difference between Node.js and Express.js?
- Express is a framework that is built for Node.
Node is a javascript runtime environment. One can write CL arguments using node, or use frameworks like Express to start and run web servers.

## What is the error-first callback pattern?
- The 'error-first callback' pattern is common in node environment. The first argument provided in the call back function is the Error object.

## What is middleware?
- Middle ware is a piece of code, that runs before a request/response cycle.
Depending on where the middleware is placed, the routes will be affected by it. If middleware that runs the statement | console.clear() |, and this middleware is places 
between 4 routes, the first two routes before the middleware aren't affected, but the later are.

## What does the `next` function do?
- The third argument in a three-arg call back function in express is the 'next' parameter. It is a callback fn. When called by `next()` this is the way of telling the route to move to the next middleware or possible route. If an arg is passed inside `next(e)` then express goes directly to the global error handler callback fn, which has a callback fn with 4 args, and
the first arg is the error object. Ex: `app.use((error, req, res, next)=>{return new Error()})`

## What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
- Naming: Better this way, than arrow functions. The variables are also clearly named.
- Structure: Simple Async-Await. Looks good.
- Performance: Terrible, the request for joel, has to wait until a response is received from previous request elie. The same with joel and matt. Instead you can call all three separately,
Since three requests are independant of each other.

```js
const elie = async()=>{await $.getJSON('https://api.github.com/users/elie')}
const joel = async()=>{await $.getJSON('https://api.github.com/users/joelburton')}
const matt = async()=>{await $.getJSON('https://api.github.com/users/mmmaaatttttt')}
const getUsers = async()=>{
  await if(elie && joel && matt){
    return [elie, matt, joel]
  }
}
```
