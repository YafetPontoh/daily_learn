// If Statement
let gajian = true;

if (gajian){
    console.log('Inget, buat kebutuhan');
} else{
    console.log('Irit-irit Mas');
};

// Rekomendasi => Pake Function
function lulus (nilai){
    const bagus = 'Mantap, nilainya bagus'
    const lulus = 'Selamat anda lulus';
    const gagal = 'Coba belajar lagi';
    if(nilai > 70){
        console.log(bagus);
    } else if(nilai <= 70){
        console.log(lulus);
    }else{
        console.log(gagal);
    }
} 

lulus(80);

// Ternary Operation
let price = 100000;
let isMember = true;
let discount = isMember ? 0.1:0;

console.log(`Harga Asli : ${price}, Harga diskon : ${price - (discount*price)}`);

//  Switch Case
const fixed = 12;
const angka = 9;
const kondisi = 'Pembagian';
switch(kondisi){
    case 'Perkalian':
        console.log(angka * fixed);
        break;
    case 'Pembagian':
        console.log(angka / fixed);
        break;
    case 'Perpangkatan':
        console.log(angka ** fixed);
        break;
}

const day = new Date().getDay();

if (day === 0) {
    console.log('Minggu');
} else if (day === 1) {
    console.log('Senin');
} else if (day === 2) {
    console.log('Selasa');
} else if (day === 3) {
    console.log('Rabu');
} else if (day === 4) {
    console.log('Kamis');
} else if (day === 5) {
    console.log('Jumat');
} else if (day === 6) {
    console.log('Sabtu');
} else {
    console.log('Hari tidak valid');
}

switch (day) {
    case 0:
        console.log('Minggu');
        break;
    case 1:
        console.log('Senin');
        break;
    case 2:
        console.log('Selasa');
        break;
    case 3:
        console.log('Rabu');
        break;
    case 4:
        console.log('Kamis');
        break;
    case 5:
        console.log('Jumat');
        break;
    case 6:
        console.log('Sabtu');
        break;
    default:
        console.log('Hari tidak valid');
}

