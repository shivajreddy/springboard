//* 1
const filterOutOdds = (...nums) => nums.filter(i=>i%2===0);
// filterOutOdds(1,2,3,4,5,6,7) // [2,4,6]


//* 2
const findMin = (...nums) => nums.reduce((num, curr)=> num<curr?num:curr);
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1


//* 3
const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2}
}
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}


//* 4 Double and Return Args
const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...(nums.map(num=>2*num))];

//* 5 Slice and Dice
/** remove a random element in the items array
and return a new array without that item. */
function removeRandom(...items) {
    items.splice(Math.random()*items.length,1);
    return items
}
// removeRandom(1,2,3) // [1,2] 0r [1,3] or [2,3]


/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {
    return [...array1, ...array2];
}
// extend([1,2],[3,4]) //[1,2,3,4]


/** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyVal(obj, key, val) {
    return {...obj, [key]:val}
}
// addKeyVal({a:1,b:2},'c',3); //{a: 1, b: 2, c: 3}


/** Return a new object with a key removed. */
function removeKey(obj, key) {
    delete obj[key]
    return obj
}
// removeKey({a:1,b:2},'b') //{a: 1}


/** Combine two objects and return a new object. */
function combine(obj1, obj2) {
    return {...obj1, ...obj2}
}
// combine({a:1,b:2},{c:3,d:4}); //{a: 1, b: 2, c: 3, d: 4


/** Return a new object with a modified key and value. */
function update(obj, key, val) {
    return {...obj, [key]:val}
}
// update({a:1,b:2},'c',3); //{a: 1, b: 2, c: 3}
// update({a:1,b:2},'b',3); //{a: 1, b: 3}