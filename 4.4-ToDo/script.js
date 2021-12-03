const form = document.querySelector('form');
const task = document.querySelector('#taskinput')

const submit = document.querySelector('button');

const todotasks = document.querySelector('.todotasks')

function removeAllButton(){
    const removeButton = document.createElement('button');
    removeAllButton
}


function addTask(taskText) {
    const newTask = document.createElement('div');
    newTask.setAttribute('class', 'notdone')
    const newTaskCheckbox = document.createElement('input')
    newTaskCheckbox.setAttribute('type', 'checkbox')
    const newTaskText = document.createElement('p')

    newTaskText.innerText = taskText;

    newTask.appendChild(newTaskCheckbox)
    newTask.appendChild(newTaskText)

    todotasks.appendChild(newTask)
    return newTaskText
}


submit.addEventListener('click', function(event){
    event.preventDefault();

    current_value = task.value
    if (!current_value.replace(/\s/g, '').length) {
        task.value = ''
    }
    else {
        addTask(current_value)
        task.value = ''
    }

})


todotasks.addEventListener('click', function(event){
    if (event.target.tagName == 'INPUT') {
        if (event.target.checked == true){
            ((event.target).nextElementSibling).setAttribute('class', 'done')
            // console.log("Yes Done")
        }
        else {
            ((event.target).nextElementSibling).setAttribute('class', 'notdone');
            // console.log('nope not done')
        }
    }

})

