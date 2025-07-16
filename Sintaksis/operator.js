// Unary Operator
let x = 5;

let nX = -x;
console.log(`x = ${x}. Negasi dari x = ${nX}`);

x++;
console.log(`Nilai post-increment x adalah ${x}`);

++x;
console.log(`Nilai pre-increment x setelah post-increment adalah ${x}`);

console.log(`Tipe data x adalah ${typeof(x)}`);

// Binary Operator
let a = 3;
let b = 5;

// 1. Operator Aritmatika
console.log("--- Aritmatika ---");
console.log(`Penjumlahan: ${a} + ${b} = ${a + b}`);
// 2. Operator Penugasan (Assignment)
console.log("--- Penugasan ---");
let res = 0;
res = a;
console.log(`Result = a : ${res}`);
// 4. Operator Logika
console.log("--- Logika ---");
let condition1 = true;
let condition2 = false;
// AND (&&) - True jika kedua kondisi true
console.log(`condition1 && condition2: ${condition1 && condition2}`);  // false

// Ternary Operator
console.log(`--- Ternary Operator ---`);
let age = 18;
let status = (age >= 18) ? "Dewasa" : "Anak-Anak";
console.log(status);

// Assignment Operator
const name = "Yafet";
let location = "Tangerang";
// Untuk mengubah nilai
location = "Kota Tangerang";

// Arithmetics Operator
let apple = 10;
let bag = 4;

const module = apple % bag;
const increment = apple++;
const decrement = --apple;
const exponential = apple**bag;

console.log(`--- Assignment Operator ---`);
console.log(`Nilai Module jika apel (mod) keranjang adalah ${module}`);
console.log(`Nilai Increment dari apel adalah ${increment}`);
console.log(`Nilai Decrement dari apel adalah ${decrement}`);
console.log(`Nilai Exponential dari apel dipangkatkan jumlah keranjang adalah ${exponential}`);

// Comparison Operator
console.log(`--- Comparison Operator ---`);
console.log(apple < bag);
console.log(apple > bag);

// Logical Operation
console.log(`--- Logical Operator ---`);
console.log(apple < bag && apple > bag); //false
console.log(apple < bag || apple > bag); //true
console.log(!(apple < bag) && apple > bag); //true

// String Operator
let fName = "Yafet";
let mName = "Rafael";
let lName = "Pontoh";

let fullName = fName + " " + mName + " " + lName;  // Yafet Rafael Pontoh
console.log(`--- String Operator ---`);
console.log(`Nama panjang saya : ${fullName}`);