// Write an ES2015 Version.

//* 1 Same keys and values
/*
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
*/

const createInstructor = (fname, lname) => {return {fname, lname}};
// instructor1 = createInstructor('Colt','Steele') //{fname: 'Colt', lname: 'Steele'}


//* 2 Compute Property Names
var favoriteNumber = 41;
/*
var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/

const instructor = {
        fname:'Colt',
        [favoriteNumber] : 'This is my favorite!'}

// instructor  //{41: 'This is my favorite!', fname: 'Colt'}


//*3 Object Methods
/*
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/

const instructor2 = {
    fname:'coltz',
    sayHi : ()=>'Hi, I am Colt, I love 🐈',
    sayBye : ()=>`${instructor2.fname} says bye!`
}


//*4 Create Animal Function
/* 
const d = createAnimal("dog", "bark", "Woooof!")
-> {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
-> {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
 */

const animal = (species, verb, noise) => {
    return {
        species,
        [verb] : ()=> noise
    }
};
// const boo = animal('cat','says','meow')
// boo.says() -> 'meow'

// const sunny = animal('dog','barks','woof')

// sunny.barks() -> 'woof'

