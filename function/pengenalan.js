let a = 8; let b = 3; let c = 4; let d = 5;

function tambah(x, y){
    let z = x + y;
    return z;
}

// let now = tambah(a,b);
// let temp = now;
// now = tambah(temp,c);
// temp = now;
// now  = tambah(temp,d);
// console.log(`Total semuanya adalah: ${now}`);

// Atau bisa seperti ini:
function jumlahkanSemuaAngka(arrayAngka) {
    let total = 0;
    for (let i = 0; i < arrayAngka.length; i++) {
        total = tambah(total, arrayAngka[i]);
    }
    return total;
}

const daftarAngka = [a, b, c, d];
let totalKeseluruhan = jumlahkanSemuaAngka(daftarAngka);

console.log(`Total semuanya adalah: ${totalKeseluruhan}`);

// Fitur Hoisting
greeting("Yafet");
function greeting(name){
    console.log(`Hello ${name}`)
}

