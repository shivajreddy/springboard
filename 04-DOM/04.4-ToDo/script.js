
// Task Object
function createTask(index, todoText, strike) {

    const todoItem = {
        index : index,
        todoText : todoText,
        strike : strike
    }

    return todoItem
}

//////////////////////////////
// const testbutton = document.querySelector('#testdelete');
// testbutton.addEventListener('click', function(){
//     // Creating a NEW Task object
//     item = (createTask(taskNumber, "something", true))
//     taskNumber = taskNumber + 1

//     localTodoTasks.push(item)
//     localStorage.setItem('localTasks', JSON.stringify(localTodoTasks))
//     console.log(localStorage.getItem('localTasks'));
// })
//////////////////////////////

const form = document.querySelector('form');
const task = document.querySelector('#taskinput')
const submit = document.querySelector('#addnewtask');
const todotasks = document.querySelector('.todotasks')
var totalTasks = 0;
const order = document.querySelector('#order')

// Create a DIV item that has input.value as innerText
function addTask(taskText, strike) {
    const newTask = document.createElement('div');
    newTask.setAttribute('class','task')
    const newTaskCheckbox = document.createElement('input')
    newTaskCheckbox.setAttribute('type', 'checkbox')
    const newTaskText = document.createElement('p')

    if (strike == false) {
        newTaskText.setAttribute('class', 'notdone')
    }
    else if (strike == true) {
        newTaskText.setAttribute('class', 'done')
    }
    newTaskText.innerText = taskText;
    const newTaskRemove = document.createElement('button')
    newTaskRemove.setAttribute('class', 'removetask')
    newTaskRemove.innerHTML = "&#10005;"

    newTask.appendChild(newTaskCheckbox)
    newTask.appendChild(newTaskText)
    newTask.appendChild(newTaskRemove)

    todotasks.appendChild(newTask)

}

// Making sure there is a 'localTasks' Key in localStorage
const localTodoTasks = []

if ((localStorage.getItem('localTasks')) == null) {
    localStorage.setItem('localTasks', JSON.stringify(localTodoTasks));

    var taskNumber = 0;
}
else {
    // Add the existing localTasks into the localTodoTasks array
    const localstorageTodoTasks = localStorage.getItem('localTasks');

    // This is a array of stricngs, each string is a json object
    const existingLocalTasks = JSON.parse(localstorageTodoTasks);

    // Getting the Length of existing tasks, and creating count
    var taskNumber = existingLocalTasks.length

    // Adding the localStorage tasks to the array in JS
    for (let task of existingLocalTasks){
        localTodoTasks.push(task)
    }

    for (let task of localTodoTasks){
        addTask(task.todoText, task.strike)
    }

}

const removeChildren = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild)
    }
}

// Creates the DIV, and Append into Results DIV
submit.addEventListener('click', function(event){
    event.preventDefault();

    current_value = task.value
    if (!current_value.replace(/\s/g, '').length) {
        task.value = ''
    }
    else {
        // Create a task in LocalStorage
        item = (createTask(taskNumber, task.value, false))
        taskNumber = taskNumber + 1

        if (order.checked == false){
            localTodoTasks.push(item)
        }
        else {
            localTodoTasks.unshift(item)
        }
        localStorage.setItem('localTasks', JSON.stringify(localTodoTasks));

        removeChildren(todotasks)

        for (let task of localTodoTasks){
            addTask(task.todoText, false)
        }
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


// Saving To-Do into Local Storage



// Extra Functionality
// Check All todo's


// Uncheck All todo's


// Toggle All todo's


// Remove all todo's
function removeAllButton(){
    const removeButton = document.createElement('button');
    removeAllButton
}


// const removelocalstorage = document.querySelector('#removelocalstorage')

// removelocalstorage.addEventListener('click', function(){
//     window.localStorage.clear();
//     // console.log('delete this asdpofjaslk')
// })




// const jslocalTodoTasks = JSON.stringify(localTodoTasks)

// const actuallocalTodoTasks = JSON.parse(jslocalTodoTasks)

// localStorage.setItem('localTasks', jslocalTodoTasks)
