// Const
const id = 123;
console.log(`Nomor teleponku depannya +${id}`);

// Let
let temp_exam_value = 80;
console.log(`Nilai sementara saya: ${temp_exam_value}`);

// Var dengan let dapat diubah sedangkan const tidak. Jika const diubah, maka akan terjadi error
let exam_value  = temp_exam_value;
console.log(`Nilai sebelum diubah: ${exam_value}`);

exam_value = 100;
console.log(`Nilai Real saya : ${exam_value}`);

// Error
// id = 919;
// console.log(`Nomor darurat alt: +${id}`);


/* 
* ATURAN PENAMAAN
* 1. Tidak boleh membuat 1 variabel yang sama dalam 1 cakupan yang sama
* 2. Nama Var tidak boleh diawali dengan angka
* 3. Nama Var hanya mengandung karakter tertentu
*/

// Contoh 1
const name = "Yafet";

// const name = "Pontoh"; --> Ini Error

// Kita bisa lakukan jika cakupannya berbeda. Contoh:

function fullname(){
    const firstName = "Yafet";
    const middleName = "Rafael";
    const lastName = "Pontoh";

    console.log(`Hello, ${firstName} ${middleName} ${lastName}!`);
}

function learn(){
    const firstName = "Yafet";
    const program = "JavaScript";
    const longStudy = 6;
    
    console.log(`Hello, ${firstName}. You have a deadline to clear all the program ${program} for ${longStudy} month`);
}

fullname();
learn();