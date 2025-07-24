// Cara Imperatif => Untuk mencapai suatu tujuan, perlu menulis instruksi langkah demi langkah

const names = ['Harry', 'Ron', 'Yafet', 'Pontoh'];

const newNamesWithExcMark = [];

for(let i = 0; i<names.length; i++){
    newNamesWithExcMark.push(`${names[i]}!`);
};

console.log(newNamesWithExcMark);

// Cara Deklaratif

const newNamesWithExcMark2 = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark2);

// Impure function
let value = 0;  // Deklarasi di luar scope (Global Scope)

function addWith(addingValue){
    value += addingValue;
    console.log(`Current Value is ${value}`);
    return value;
};

const res1 = addWith(1);
const res2 = addWith(1);
const res3 = addWith(1);
// Nilainya selalu berubah, tidak konsisten

console.log(res1, res2, res3);

// Pure function
function addWith2(value, addingValue){
    return value + addingValue;
};

const result1 = addWith(0,1);
console.log(`Result 1 : ${result1}`);

const result2 = addWith(result1,1);
console.log(`Result 2 : ${result2}`);

const result3 = addWith(result2,1);
console.log(`Result 3 : ${result3}`);