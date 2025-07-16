const object = {callName : "Yafet", age: 22, hobby : "Playing Chess"};

// Menggunakan notasi dot
console.log(`Hello, my name is ${object.callName}. I'm ${object.age} years old. My hobby is ${object.hobby}.`);

// Menggunakan object destructuring -> Mengeluarkan property object ke variabel
const {callName, age, hobby, tPerson = "Ms. Kind"} = object;
console.log(`Hello, my name is ${callName}. I'm ${age} years old. My hobby is ${hobby}. Nice to meet you ${tPerson}`);

// Mengubah Properti Object
object.callName = "Fay";
console.log(`Hello, my name is ${object.callName}. I'm ${object.age} years old. My hobby is ${object.hobby}.`);

// Menghapus Properti Object
delete object.hobby;
console.log(`Hello, my name is ${object.callName}. I'm ${object.age} years old. My hobby is ${object.hobby}.`);
