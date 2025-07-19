// Object
const obj1 = {name : "Yafet"};
const obj2 = {study: "Pamulang University", address:"Jl.Viktor"};
const newObj = {...obj1, ...obj2};

console.log(newObj);

// Array
const objA1 = ['Yafet', 'Rafael', 'Pontoh'];
const objA2 = ['Universitas Pamulang', 'Jl. Viktor'];
const newObjA = [...objA1, ...objA2];

console.log(newObjA);