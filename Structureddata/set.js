const set = new Set([1,2,3]);
console.log(set);

/* Output:
* Set(3) {
*  1,
*  2,
*  3,
* }
*/

// Menyimpan nilai di Set
set.add(4);
set.add(2);  // Set hanya akan menyimpan 1 nilai yang sama

// Mengakses Nilai Set -> harus menggunakan looping
for (const number of set){
    console.log(number);
}

/* Output:
* 1
* 2
* 3
* 4
*/


// Menggunakan foreach
set.forEach((value) => console.log(value));

set.delete(2);
console.log(set);

/* Output:
* Set(3) {
*  1,
*  3,
*  4,
* }
*/