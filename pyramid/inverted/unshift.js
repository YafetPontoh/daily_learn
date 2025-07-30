const char = '#';
const count = 8;
const arr = [];

function padRow(arrNum, arrCount){
    return " ".repeat(arrCount - arrNum) + char.repeat(2* arrNum - 1) + " ".repeat(arrCount - arrNum) ;
}

for(let i = 1; i <= count; i++){
    /** Give the condition if inverted pyramid, run the unshift method. Else, run the standard pyramid */
    let inverted = true;
    if(inverted){
        arr.unshift(padRow(i, count));
    } else{
        arr.unshift(padRow(i, count));
    }
    
}

let res = '';
for(row of arr){
    res = res + row + '\n';
}

console.log(res);