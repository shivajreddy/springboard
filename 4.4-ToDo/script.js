// Making Sure there is a localStorage TodoTasks
const localTodoTasks = []
if ((localStorage.getItem('localTasks')) == null) {
    localStorage.setItem('localTasks', JSON.stringify(localTodoTasks));
}
else {
    for (let i = 0; i < (JSON.parse((localStorage.getItem('localTasks')))).length ; i ++) {
        localTodoTasks.push ((JSON.parse((localStorage.getItem('localTasks'))))[i])
    }
}



const form = document.querySelector('form');
const task = document.querySelector('#taskinput')
const submit = document.querySelector('#addnewtask');
const todotasks = document.querySelector('.todotasks')
var totalTasks = 0;
const order = document.querySelector('#order')


// Create a DIV item that has input.value as innerText
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

}

// Creates the DIV, and Append into Results DIV
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
// function addNewTodoTasks(){
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
// }


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

const testbutton = document.querySelector('#testdelete');

var count = 0;

testbutton.addEventListener('click', function(){
    console.log(localStorage.getItem('localTasks'));
    // console.log("yes clicked")
    count = count + 1;
    localTodoTasks.push(count)
    localStorage.setItem('localTasks', JSON.stringify(localTodoTasks))
})




