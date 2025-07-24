import { memo } from "react";

function apply(operation, ...args){
    return operation(...args);
};

function sum(a,b,c){
    return a+b+c;
};

function discount(disc, value){
    return value - ((disc/100) * value);
};

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log(`Product Price :`, productPrice);
console.log(`With Discount 25% :`, withDiscount);



// Array.map()
const numbers = [1,2,3,4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);
