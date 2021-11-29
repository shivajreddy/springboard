// http://curric.rithmschool.com/springboard/assessments/meme-gen-8d96/


// COllect all items of lightDark class
let lightDarkElements = document.getElementsByClassName('lightDark');

// Toggle button to change from light to dark, dark to light
function ToggleDarkMode() {
    var t = document.getElementById('lightDarkToggleButton');

    if (t.value == "LIGHT") {
        t.value = "DARK"

        for (let lightDarkElement of lightDarkElements) {
            lightDarkElement.classList.remove('lightMode');
            lightDarkElement.classList.add('darkMode');
        };
    }

    else if (t.value == "DARK") {
        t.value = "LIGHT"

        for (let lightDarkElement of lightDarkElements) {
            lightDarkElement.classList.remove('darkMode');
            lightDarkElement.classList.add('lightMode');
        };
    };
};


// Test work

let queryCol = document.querySelector('#id2');

console.log(queryCol)

let queryCol2 = document.querySelector('h3');



