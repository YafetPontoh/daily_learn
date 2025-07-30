const character = "#";
const count = 8;
const arr = [];

function padRow(rowNumber, rowCount){
    /** " ", to give some space
     * 2*rowNumber - 1 => To generate a sequences of odd numbers.
     */
    return " ".repeat(rowCount-rowNumber) + character.repeat(2*rowNumber - 1) + " ".repeat(rowCount-rowNumber);
}

let continueLoop = false;
while(arr.length < count){
    console.log(arr.length+1, continueLoop);
    /** Must + 1 because arr.length start from 0 */
    arr.push(padRow(arr.length+1, count));
};

let result = "";
for(const row of arr){
    result = result + row + '\n';
}
console.log(result);