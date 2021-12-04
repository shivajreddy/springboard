const form = document.querySelector('form');
const task = document.querySelector('#taskinput')
const submit = document.querySelector('#addnewtask');
const todotasks = document.querySelector('.todotasks')
var totalTasks = 0;
const order = document.querySelector('#order')


function removeAllButton(){
    const removeButton = document.createElement('button');
    removeAllButton
}


function addTask(taskText) {

    const newTask = document.createElement('div');
    newTask.setAttribute('class','task')

    const newTaskCheckbox = document.createElement('input')
    newTaskCheckbox.setAttribute('type', 'checkbox')

    const newTaskText = document.createElement('p')
    newTaskText.setAttribute('class', 'notdone')
    newTaskText.innerText = taskText;

    const newTaskRemove = document.createElement('button')
    newTaskRemove.setAttribute('class', 'removetask')
    newTaskRemove.innerHTML = "&#10005;"

    newTask.appendChild(newTaskCheckbox)
    newTask.appendChild(newTaskText)
    newTask.appendChild(newTaskRemove)

    if (order.checked == false){
        todotasks.appendChild(newTask)
    }
    else {
        todotasks.prepend(newTask)
    }

    // return newTaskText
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


// Toggle Finish/Unfinished Task
todotasks.addEventListener('click', function(event){
    if (event.target.tagName == 'INPUT') {
        if (event.target.checked == true){
            ((event.target).nextElementSibling).setAttribute('class', 'done')
        }
        else {
            ((event.target).nextElementSibling).setAttribute('class', 'notdone');
        }
    }
    else if (event.target.tagName =='BUTTON') {
        (event.target.parentElement).remove()
        // console.log(event.target.parentElement)
        console.log('delete the event')
    }
})

const localToDoTasks = [];
var count = 0;

localStorage.setItem('localTasks', localToDoTasks);
console.log(localStorage.length)






