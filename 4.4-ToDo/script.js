
const form = document.querySelector('form');
const task = document.querySelector('#taskinput')
const submit = document.querySelector('#addnewtask');
const todotasks = document.querySelector('.todotasks')
var totalTasks = 0;
const order = document.querySelector('#order')

const localTodoTasks = []

localTodoTasks.push(1)
// localStorage.setItem('todoTasks', localTodoTasks)



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

const localStorageToDo = [];


function jsobject(actual_object){
    const jsobject = JSON.stringify(actual_object);
    return jsobject;
};

function actualObject (js_object){
    const actual = JSON.parse(js_object);
    return actual;
};

localStorage.setItem('localToDoTasks', jsobject() )

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


const removelocalstorage = document.querySelector('#removelocalstorage')

removelocalstorage.addEventListener('click', function(){
    window.localStorage.clear();
    // console.log('delete this asdpofjaslk')
})

