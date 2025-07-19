const foods = ['Nasi Padang', 'Pasta', 'Sate'];

for (let i = 0; i< foods.length; i++){
    console.log(foods[i]);
}

// for ... in  ...
const person = {name : 'Yafet', callName : 'Fay', origin : 'Tangerang'};
for (const property in person){
    console.log(`${property} bernilai ${person[property]}`);
}

// for ... of ...
const animals = ['duck', 'dog', 'fish', 'cow', 'cat'];
for (const item of animals){
    console.log(item);
}

// While
let x = 0;
while (x<5){
    console.log(x);
    x++;
}

// Do-While
let y = 0;
do{
    console.log(y);
    y++
} while (y < 5);