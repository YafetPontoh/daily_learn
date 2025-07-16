/*
* Mengubah ke String, 
* menggunakan toString() atau String()
*/
console.log("======================Konversi String====================");

const nilai = 100;
const valid = true;

const strNilai = String(nilai);
const strValid = valid.toString();

console.log(`Nilai ${strNilai} ini bertipe data ${typeof(strNilai)}`);
console.log(`Nilai ${strValid} ini bertipe data ${typeof(strValid)}`);

/* Mengubah ke Number
* Dapat menggunakan fungsi Number()
* Selain itu, dapat juga dibuat menjadi lebih spesifik.
* Salah dua nya menggunakan parseInt() dan parseFloat()
*/

console.log("======================Konversi Number====================");

const strFloat = "9.9";

const numFloat = Number(strFloat);

console.log(`Nilai ${numFloat} ini bertipe data ${typeof(numFloat)}`);

// parseInt() dan parseFloat()

const total = 10000;

const intTotal = parseInt(total);
const floatTotal = parseFloat(total);

console.log(`Harga dari buah ini adalah sebesar Rp. ${intTotal}, yaitu dengan tipe data ${typeof(intTotal)}`);
console.log(`Harga dari buah ini adalah sebesar Rp. ${floatTotal}, yaitu dengan tipe data ${typeof(floatTotal)}`);

/* Mengubah ke Boolean
* Dalam mengonversi ke boolean, kita dapat menggunakan fungsi Boolean()
* Hampir semua nilai boolean adalah true, yang biasa disebut truthy. Dan hanya segelintir saja yang bernilai false, atau falsy
*/
const makanan = "Sushi";
const grade = null;

const boolTotal = Boolean(total);
const boolMakanan = Boolean(makanan);
const boolGrade = Boolean(grade);

console.log("======================Konversi Boolean====================");
console.log(boolTotal);
console.log(boolMakanan);
console.log(boolGrade);

/* Konversi Implisit
* Ini terjadi karena JS secara otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer.
*/

console.log("======================Konversi Implisit====================");

const age = 20;
const message = "Umurku " + age;

// Age (int) akan berubah menjadi String ketika disatukan dengan string. Ini dinamakan konversi implisit.
console.log(message, `,Tipe data = ${typeof(message)}`);