const add = (a,b) => a+b;

const sub = (a,b) => a-b;

const mult = (a,b) => a*b;


module.exports = {
  add : add,
  sub: sub,
  mult: mult
};

// console.log(`from helper file-> ${add(51,52)}`);


const cl_args = process.argv;

for (let arg of cl_args){
  // console.log(arg);
}

