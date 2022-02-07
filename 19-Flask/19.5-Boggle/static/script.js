console.log("Hi Mom!");

const button = document.querySelector('button');

button.addEventListener('click', function doSomething(){
    const user_input = document.querySelector('input').value;
    console.log(user_input);
});

