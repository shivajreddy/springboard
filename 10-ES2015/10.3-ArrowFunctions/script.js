
var PI = 3.14;
PI = 42; // stop me from doing this!




/* 
What is the difference between var and let?
var creates a global variable, that can be modified and accessed from any where in the code.
let variable can also be modified after assignment. But, its scope is with in a loop or function.


What is the difference between var and const?
const has same scope as let, but const cant be modified after assigned.


const a = () => {
    const pi = 3.14;
    return pi
}
const b = () => {
    const pi = 3.14;
    return pi
}
pi is a constant but it lies inside separate scopes, so it is allowed.


What is the difference between let and const?
let can be changed, const can't be changed

What is hoisting?
*/
