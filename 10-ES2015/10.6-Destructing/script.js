// Destructing Exercise

//*1
/* 
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); //* 8 
console.log(yearNeptuneDiscovered); //* 1846
 */

//*2
/* 
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};
  
let {numPlanets, ...discoveryYears} = planetFacts;
  
console.log(discoveryYears); //* {yearNeptuneDiscovered:1846, yearMarsDiscovered:1659}
 */

//*3
/* 
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
};
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Alejandro, Purple
getUserData({firstName: "Melissa"}) // Melissa, green
getUserData({}) // undefined,green
*/

//*1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // maya
console.log(second); // marisa
console.log(third); // chi

//*2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
];

console.log(raindrops); // 'Raindrops on roses'
console.log(whiskers); // 'whiskers on kittens'
console.log(aFewOfMyFavoriteThings); // [brigh copper kettles, warm woolen, brown papen]

//*3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

//*1
var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
  
// var a = obj.numbers.a;
// var b = obj.numbers.b;

//*2
var arr = [1,2]
arr[0,1] = arr[1,0]


//*3
const raceResults = (inp) => {    
    let [f,s,th,...rest] = inp
    let answ = {
        first: f,
        second:s,
        third:th,
        rest: rest
    }
    return answ
}
