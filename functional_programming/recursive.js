// Menggunakan for loop
function generateArray(n){
    const result = [];
    for (let counter = 0; counter <= n; counter += 1){
        result.push(counter);
    }
    return result;
};

console.log(generateArray(5));

// Rekursif menggunakan FP
function generate(n){
    if(n<0){
        return[];
    }
    return[...generate(n-1), n]
};

console.log(generate(5));