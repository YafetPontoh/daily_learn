// Memoization Pure Function dengan teknik HOF
function memoize(fn){
    // tempat penyimpanan -> cache
    const cache = new Map(); // Closure

    /* 
    * Tujuannya adalah untuk menghindari perhitungan ulang
    * Jika input yang sama terjadi
    */

    return function(...args){  // Fungsi anonim yang dikembalikan
        const key = JSON.stringify(args);  // Membuat key unik dari argumen

        if(cache.has(key)){  // Cek apakah hasil sudah ada di cache
            return cache.get(key);  // Jika ada, kembalikan dari cache
        };

        const res = fn(...args);  // Jika belum ada, panggil fungsi asli (fn)
        cache.set(key, res);  // Simpan hasilnya di cache

        return res;  // Kembalikan hasilnya
    };
};

function sumArray(arr){
    if(arr.length === 0) return 0;
    return arr[0]+sumArray(arr.slice(1));
};

const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({length: 5000}, (_, i) => i+1);  // Array besar

/*
* Underscore adalah parameter pertama yang mewakili nilai dari elemen di posisi saat ini.
* menggunakan underscore berguna untuk menunjukkan kita tidak menggunakan params tersebut.
*/

console.time('Memoized Sum First Call');
console.log(`Total: ${memoizedSumArray(largeArray)}`);
console.timeEnd(`Memoized Sum First Call`);

console.time('Memoized Sum Second Call');
console.log(`Total: ${memoizedSumArray(largeArray)}`);
console.timeEnd(`Memoized Sum Second Call`);