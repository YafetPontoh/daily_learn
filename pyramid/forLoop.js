const char = "#";
const count = 8;
const arr = [];

function padRow(rowNumb, rowCount){
    return " ".repeat(rowCount - rowNumb) + 
    char.repeat(2*rowNumb -1) + " ".repeat(rowCount - rowNumb);
}

for(let i = 0; i < count; i++){
    /** i+1 agar tidak ada space kosong */
    arr.push(padRow(i+1, count));
}

let result = "";

for(const arry of arr){
    result = result + arry + "\n";
}

console.log(result);