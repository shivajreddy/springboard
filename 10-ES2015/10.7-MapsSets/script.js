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

const vowelCount = (word) => {
    function isVowel(char){
        const vowels = 'aeiou';
        return vowels.includes(char);
    };
    const result = new Map();
    for (let char of word){
        if(isVowel(char)){
            if(result.has(char)){result.set(char, result.get(char)+1)}
            else{result.set(char,1)}
        };
    };
    return result;
};
