function max(arrayOfNumbers){
    return arrayOfNumbers.sort((a,b) => a-b).pop();
};

const numbers = [10,23,24,7,42,18];
const largest = max(numbers);

console.log(largest);
console.log(numbers);

// Object.assign()
function registerEmail(person, email){
    return Object.assign(person, { email });
}

const person = {
    name: 'Yafet',
    username : 'yafetrafael',
};

const personWithEmail = registerEmail(person, 'yafet@gmail.com');

console.log(person);
console.log(personWithEmail);

// Duplikasi, Alih-alih mengubah data asli
function max2(arrayNumber){
    return[...arrayNumber].sort((a,b) => a-b).pop();
};

const numbers2 = [10,23,24,7,42,18];
const largest2 = max2(numbers2);
console.log(largest2);
console.log(numbers2);

function registerEmail2(person, email){
    return {...person, email};
};

const person2 = {
    name: 'Yafet',
    username : 'yafetrafael',
};

const personWithEmail2 = registerEmail2(person2, 'yafet@gmail.com');

console.log(person2);
console.log(personWithEmail2);