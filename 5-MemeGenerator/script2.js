
function colorful() {
    let r = Math.floor((Math.random() * 256))
    let g = Math.floor((Math.random() * 256))
    let b = Math.floor((Math.random() * 256))

    return `rgb(${r},${g},${b})`
}

console.log(colorful());

// const letters = document.querySelectorAll('span.letter');

let letters = document.querySelectorAll('.letter');



setInterval(function () {
    for (let letter of letters) {
        letter.style.color = colorful()
    }
}, 1200);


