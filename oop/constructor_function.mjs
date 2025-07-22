// Mendefinisikan Construction FunctionPerson
function Person(name, age){
    this.name = name;
    this.age = age;
};

// Menambahkan method ke prototype
Person.prototype.eat = function(){
    console.log(`${this.name} is eating.`);
};

// penggunaan:
const person1 = new Person('Yafet',22);
const person2 = new Person('Andre', 22);

console.log(person1.name);  // Yafet
console.log(person2.name);  // Andre

person1.eat();  // Yafet is eating.
person2.eat();  // Andre is eating.