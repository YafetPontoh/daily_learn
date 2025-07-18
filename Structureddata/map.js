// Create map
const map = new Map();

const product = new Map([
    ['Clothes' , 70],
    ['Jeans' , 100],
    ['Tumbler' , 160],
    ['T-Shirt' , 200],
    ['Shoes' , 20],
]);

console.log(product);

// Menyimpan nilai Map
map.set('name' , 'Yafet');
map.set('NIM', 221011401900);
console.log(map); 
/* Map(2) {
*  "name": "Yafet",
*  "NIM" : 221011401900,
* }
*/

// Mengakses Map
console.log(map.get('NIM')); // 221011401900

// Menghapus
map.set('citizen', 'Indonesia');  // menambahkan key citizen
map.delete('NIM');  // Menghapus nilai NIM
console.log(map);