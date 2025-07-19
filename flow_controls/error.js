const err = new Error('Terjadi Error');
console.log(err);

// Case 1: Built-in error saat harga pembayaran kurang
const price = 100000;
const paid = 80000;

if (paid < price){
    throw new Error('Pembayaran Kurang');
}

// Try - Catch
try {
    console.log('Memulai Program');
    throw new Error('Coba error');
    console.log('Mengakhiri Program');
} catch (err){
    console.log('Blok ini akan dibangkitkan jika ada error');
} finally{
    console.log('Finally');
}