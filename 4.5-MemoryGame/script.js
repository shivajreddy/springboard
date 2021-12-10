
const result = document.querySelector('#result');

result.innerText = "shiva"
result.innerText = "reddy"


const button = document.querySelector('#push');

let count = 0

function addText() {
    // let someNumber = Math.floor((Math.random()) * 20)
    count = count + 1
    result.innerText = `${count}`
    // return count
}
