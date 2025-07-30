const character = '#';
const arr = [];
const count = 8;

function padRow(arrNum, arrCount){
    return " ".repeat(arrCount - arrNum) + character.repeat(2* arrNum - 1) + " ".repeat(arrCount - arrNum);
}

for(let i = count; i>0; i -= 1){
    arr.push(padRow(i, count));
}
result="";
for (let row of arr){
    result = result + row + "\n";
}

console.log(result);