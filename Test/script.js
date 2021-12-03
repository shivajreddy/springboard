
const ul = document.querySelector('ul')


const li = document.querySelector('li');


ul.addEventListener('click', function(event){
    let thing = event.target
    console.log(thing.dataset)
    console.log(thing.getAttribute('data-id'))
    // console.log(thing.dataset.id)
})

const preferences = {
    fontSize: '18px',
    favColor: 'purple'
}


localStorage.setItem('preferences', preferences);



JSON
JSON.stringify
JSON.

