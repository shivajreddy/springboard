new Set([1,1,2,2,3,4])  // {1,2,3,4}
let res = new Set("referee")

// [...new Set("referee")].join("") // set-> {r,e,f}, join-> 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// map will keep adding the arr[0] as key, and arr[1] as value, so m will have  {[1,2,3]:true,[1,2,3]:false}


const hasDuplicate = (arr) => {
    if (new Set(arr).size == arr.length){return false}
    else{return true}
};
// hasDuplicate([1,3,2,1])     //true
// hasDuplicate([1,5,-1,4])    //false

const name = 'shiva';

const vowelCount = (word) => {
    let a=0, e=0, i=0, o=0, u=0;
    for(let char of [...word]){
        if(char === 'a'){a+=1}
        if(char === 'e'){e+=1}
        if(char === 'i'){i+=1}
        if(char === 'o'){o+=1}
        if(char === 'u'){u+=1}
    }
    return {a,e,i,o,u}
};

