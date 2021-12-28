
const countdown = (num) =>{
    // for(let i =0; i<num ; i++){
    for (let i = 0; i < num ; i++)
    {
        setTimeout(console.log(i), 1000)
    }
}

// console.log(countdown(4))

const f = () => console.log('hello there');

let num = 5;

for(let i=0; i<num; i++){

    // setInterval(f, 1000);

    setTimeout(f,1000)

}
