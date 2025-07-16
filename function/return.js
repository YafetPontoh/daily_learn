// Coba untuk menyimpan console.log ke variable

let name = console.log(`My Name is Yafet`);

console.log(name);  // Undifined

// Maka kita harus menggunakan kata kunci return

function result(kehadiran, tugas, UTS, UAS){
    const bobotKehadiran = 0.1;
    const bobottugas = 0.2;
    const bobotUTS = 0.3;
    const bobotUAS = 0.4;

    const res = (kehadiran * bobotKehadiran) + (tugas * bobottugas) + (UTS * bobotUTS) + (UAS * bobotUAS);

    return res
}

let nilai  = result(100, 80, 90, 80);
console.log(nilai);

function noReturn() {
    let x = 10;
}