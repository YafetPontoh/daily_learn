/** Unshift array refers to adding  a value to the beginning of the array. */
const numbers = [1,2,3];
const newNumbers = numbers.unshift(8);
console.log(numbers);
console.log(newNumbers); 
/** Like push, unshift() can return the length of array
 * So, if you log the variable newNumbers, it can refers the length of the numbers AFTER adding the new number in beginning 
 * And, if you log the variable numbers, it will return the numbers AFTER adding the new number in the beginning
 * */ 

/** Shift method will remove the first element of the array. 
 * It's the same like pop method, however, pop method can remove the last element of array 
 * */

const remNumbers = numbers.shift();
console.log(numbers);
console.log(remNumbers);

/** Like pop method, shift will return the value of the deleted number  
 * You can see in the variable remNumbers, where the variable will return the first number deleted in var numbers.
*/