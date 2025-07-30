const character = '#';
const count = 8;
const rows = [];

for(let i=0; i<count; i++){
    rows.push(i);
    console.log(`Rows [${i + 1}] : ${rows[i]}`);
};

let result = '';

for(const row of rows){
    // Concatenantion
    result = result + row + '\n';
}