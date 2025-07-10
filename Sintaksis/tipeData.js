// String
const platform = "Dicoding";

// Number
const callNumber = 123;

// Boolean
const completed = false;

console.log(`Nomor telepon ${callNumber} berasal dari platform ${platform}. Infonya valid: ${completed}`);

/*
* JS punya 2 cara untuk mendefinisikan nilai kosong, yaitu menggunakan nilai null atau undefined.
* Sangat disarankan untuk menggunakan undefined. Perbedaannya dapat dilihat saat membandingkan object
*/

// Nilai kosong (null)
let message = null;
console.log(message);

// Undefined Nilai
let score;
let point = undefined;

// Keduanya bernilai sama, yaitu undefined
console.log(point);
console.log(score);

// Membandingkan objek dalam format JSON
const name1 = {first: "Yafet", last: null};
const name2 = {first: "Yafet", last: undefined};
console.log(JSON.stringify(name1));
console.log(JSON.stringify(name2));