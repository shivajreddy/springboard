//* CountDown Function
const countDown = (num) => {

    let n = num

    const print = (n)=>{
        if(n > 0) console.log(n);
        if(n == 0) console.log('Done!');
    }

    setInterval(()=>{
        print(n)
        n -= 1
    },1000);

}

// countDown(12);


//*RandomGame Function

const randomGame = () => {

    const randomNumber = ()=>Math.random()
    let number = 0;
    let counter = 0;

    const id = setInterval(()=>{
        if (number < 0.75) 
        {
            counter += 1;
            number = randomNumber()
            console.log(number)
            
        }
        else {
            console.log(`It took ${counter} times to reach ${number} which is > 0.75`);
            clearInterval(id)
        }
    }, 1000);
}
randomGame()