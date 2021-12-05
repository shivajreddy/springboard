// </Shiva Reddy>
// http://curric.rithmschool.com/springboard/assessments/meme-gen-8d96/

// COllect all items of lightDark class
let lightDarkElements = document.getElementsByClassName('lightDark');
const toggleButton = document.querySelector('nav button')

// Toggle button to change from light to dark, dark to light
function ToggleDarkMode() {
    var t = document.getElementById('lightDarkToggleButton');

    if (t.value == "LIGHT") {
        t.value = "DARK"

        for (let lightDarkElement of lightDarkElements) {
            lightDarkElement.classList.remove('lightMode');
            lightDarkElement.classList.add('darkMode');
        };
        toggleButton.innerText = "Light-Mode"
    }
    else if (t.value == "DARK") {
        t.value = "LIGHT"

        for (let lightDarkElement of lightDarkElements) {
            lightDarkElement.classList.remove('darkMode');
            lightDarkElement.classList.add('lightMode');
        };
        toggleButton.innerText = "Dark-Mode"
    };
};

const form = document.querySelector('form')
const imageURL = document.querySelector('#imageurl')
const textTOP = document.querySelector('#texttop')
const textBOT = document.querySelector('#textbot')
const submit = document.querySelector('button[type="submit"]')
const section = document.querySelector('section')
const deletebutton = document.querySelector('#deletememe')

function createMeme() {
    const memediv = document.createElement('div')
    memediv.setAttribute('class', 'imageContainer')

    const memeimg = document.createElement('img')
    memeimg.setAttribute('width', '500px')
    memeimg.setAttribute('src', imageURL.value)

    const topText = document.createElement('div')
    topText.setAttribute('class', 'topcenter')
    topText.innerText = textTOP.value
    const botText = document.createElement('div')
    botText.setAttribute('class', 'botcenter')
    botText.innerText = textBOT.value
    const deletebutton = document.createElement('button')
    deletebutton.setAttribute('class', 'deletememe')
    deletebutton.type = 'button'
    deletebutton.innerText = "❌"

    deletebutton.addEventListener('click', function(){
        removeParent(deletebutton)
    })

    memediv.append(memeimg)
    memediv.append(topText)
    memediv.append(botText)
    memediv.append(deletebutton)
    // memediv.append(textTOP.value)

    element = document.createElement('p')
    element.innerText = "Cant steal what you don't have"

    return memediv
}

submit.addEventListener('click', function(e){
    if (form.checkValidity()) {
        e.preventDefault()
        section.prepend(createMeme());
    }
})

function removeParent(element){
    element.parentElement.remove()
}


