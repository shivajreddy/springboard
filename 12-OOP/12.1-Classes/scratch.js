
function whatisThis(){
    console.log('this in whatisThis is=',this);
}

const myObj = {
    func : whatisThis,
    func2(){
        console.log(this);
    },
    prop2 : 'value2',
    prop3: console.log(this)
}

// myObj.func();
myObj.func2();
const my1 = myObj.func2();

// my1.call(object, arg1,arg1)

const boo = {
    catname: 'boo',
    catsound : 'meeew',
    dance(style){
        return `"${this.catname}" - "${this.catsound} - '${style}' dance`
    },
    greet(){
        alert(`${this.catname} says welcome!!`)
    }
}

const sunny = {
    dogname :'sunny',
    catsound : 'woof'
}


const salesTax = (taxPercentage, price) => price*taxPercentage;

const stateTax = salesTax.bind(null,0.1);
const centralTax = salesTax.bind(null,0.05);

const totalPrice = (itemPrice) => itemPrice + stateTax(itemPrice) + centralTax(itemPrice);
console.log(
    boo.dance()
);

const alr = ()=>alert('hi')

document.querySelector('#btn-1').addEventListener('click',boo.greet.bind(boo))