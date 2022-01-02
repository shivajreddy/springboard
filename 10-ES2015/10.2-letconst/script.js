/* 
function double(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}
*/

const double = (arr) => arr.map((i)=>i*2);
// double([2,21,12])   //[4, 42, 24]

/* 
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
        return num ** 2;
    });
    var evens = squares.filter(function(square){
        return square % 2 === 0;
    });
    return evens;
}
*/

const squareAndFindEvents = (numbers) => (numbers.map((i)=>i**2)).filter((i)=>i%2==0);
// squareAndFindEvents([1,2,3,4,2,4,6,13,12,3,5,8])    //[4, 16, 4, 16, 36, 144, 64]
