const array = [5,2,4,3,1];
console.log(array); // Output : 5.2,4,3,1
console.log(array[3]); // Output : 3

// Constructor
const arr = new Array(4);
const arr1 = new Array(4);

// Mengisi per indeks
arr[0] = 30;
arr[1] = 28;
arr[2] = 26;
arr[3] = 24;
console.log(arr);

/* Mengisi dengan fill(value, start, end) method.
* Value : nilai yang mau kita isi
* Start : Index ke berapa yang mau diisi
* End : Sampai index ke berapa + 1 (Karena diitung dari 1)
*/
arr1.fill(2,0,1);
arr1.fill(4,1,2);
arr1.fill(6,2,3);
arr1.fill(8,3,4);
console.log(arr1); // [2,4,6,8].

// Menggunakan Array.from(length, (value, index)). Seperti menggunakan iterasi
const arr2 = Array.from({length:4}, (v,i) => (i * 2)+2); 
console.log(arr2); // [2,4,6,8].

const foo = Array.from("foo");
console.log(foo); // ['f', 'o', 'o']

// Array.from juga dapat digunakan untuk menyalin array lainnya
const users = new Array('Yafet', 'Rafael', 'Pontoh');
const customer = Array.from(users);
console.log(customer);

// Kenapa ga copy aja? Kenapa harus pakai Array.from?
const customer2 = users;
console.log(customer2);

console.log(users[2]);
console.log(users.slice(0,2));

// Manipulasi Nilai Index

// Indexing
let num = [1,2,3,4,5];
console.log(`Before manipulation : ${num}`);
num[1] = 10;
console.log(`After manupulation : ${num}`);

// Push -> Add
num.push(6)
console.log(`Add number 6: ${num}`);

// Delete -> hanya akan mengosongkan index, tidak benar benar menghapus.
delete num[5];
console.log(`Delete number 6: ${num}`);

// Solusi : Menggunakan splice
num.splice(1,1);  // Hapus index 1 sebanyak 1 elemen 
console.log(`Delete 10 : ${num}`);

// filter -> Jika tidak tau posisinya
const numb = num.filter((element, index) => element !== 5);
console.log(`Delete 5 : ${numb}`);

// Pop, untuk hapus element dari akhir, dan shift, untuk menghapus element dari awal
// Kita tambahkan dlu beberapa element array

const element = [10,20,30,40,50];
for(let i = 0; i < element.length; i++){
    numb[numb.length] = element[i];
}
console.log(`After add : ${numb}`);

numb.pop();  // Ini untuk delete belakang
console.log(`Delete last number : ${numb}`);
numb.shift();  // Ini untuk delete depan
console.log(`Delete first number : ${numb}`);