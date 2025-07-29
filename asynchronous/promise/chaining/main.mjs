import { makeCoffee, sendCoffee } from "./coffee.mjs";

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe`);

makeCoffee(order).then(
    // Parameter 1 -> untuk isi resolve (value)
    (value) => {
        return sendCoffee(value);
    },
    // // Parameter 2 -> untuk isi rejected (error)
    // (error) => {
    //     console.error(error.message);
    //     throw error;
    // },
).then(
    // Parameter 1
    (value) => {  // value disini di dapat dari return promise sendCoffe
        console.log(`Pramusaji memberikan ${value} pesanan.`);
        console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    // // Parameter 2
    // (error) => {  // error disini di dapat dari return promise sendCoffe
    //     console.error(error.message);
    //     throw error;
    // },
).catch((error) =>{
    console.log(error.message);
});