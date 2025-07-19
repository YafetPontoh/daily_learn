function func(...name){
    console.log(`nama : ${name}`);
}

func('Yafet', 'Rafael', 'Pontoh'); // nama : Yafet,Rafael,Pontoh

function fun(no, ...age){
    console.log(`no : ${no}, and age : ${age}`);
};

fun(1,78,88,90) // no : 1, and age : 78,88,90

// Menggunakan array.length() -> Iseng
function arr(...names){
    for(let i = 0; i < names.length; i++){
        console.log(`${i+1}. ${names[i]}`);
    }
}

arr(`Yefta`, `Yafet`, `Ezra`, `Anya`);

/* Output:
*1. Yefta
*2. Yafet
*3. Ezra
*4. Anya
*/

const arr1 = [`Yefta`, `Yafet`, `Ezra`, `Anya`];

const [first, second, ...other] = arr1;

console.log(`First : ${first}, Second : ${second}, and Other : ${other}`);

