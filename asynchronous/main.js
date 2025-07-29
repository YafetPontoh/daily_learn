import { makeCoffee, sendCoffee } from "./coffee.mjs";

console.log(`Saya memesan kopi di Kafe.`);
makeCoffee(() => {
    sendCoffee(() => {
  console.log(`Saya mendapatkan kopinya`);  
    });
});
