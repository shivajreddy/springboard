

const myItem = document.querySelector('h2');

myItem.className = 'small'

setInterval(function () {
        myItem.classList.toggle('big');
        myItem.classList.toggle('small');
    },1000)
