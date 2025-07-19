for(let i = 0; i <= 6; i++){
    let number = i+1
    console.log(number);

    // switch statement
    switch (number){
        case 1:
            console.log('Berenti di 1');
            break;
        case 2:
            console.log('Berenti di 2');
            break;
        case 3:
            console.log('Berenti di 3');
            break;
        case 4:
            console.log('Berenti di 4');
            break;
        case 5:
            console.log('Berenti di 5');
            break;
        default:
            console.log('Angka kurang dari 1 atau lebih dari 5');
            break;
    };

    // if statement
    if(number == 5){
        break;
    };
};

// Continue
for(let x = 0; x<10; x++){
    const t = x+1
    if (t == 5){
        continue;
    };
    console.log(t);
};

let finalIValue; // Deklarasi di luar scope loop
for(let y = 0; y <= 6; y++){
    let number = y+1;
    console.log(number);
    if(number == 5){
        finalIValue = y; // Simpan nilai i sebelum break
        break;
    };
    finalIValue = y; // Simpan nilai i jika loop selesai tanpa break
};

console.log(`Loop berhenti saat i = ${finalIValue}`); // Output: Loop berhenti saat i = 4

switch (finalIValue){
    case 1:
        console.log('Berhenti di 1');
        break;
    case 2:
        console.log('Berhenti di 2');
        break;
    case 3:
        console.log('Berhenti di 3');
        break;
    case 4:
        console.log('Berhenti di 4'); // Ini akan tercetak
        break;
    case 5:
        console.log('Berhenti di 5');
        break;
    default:
        console.log('Angka tidak cocok dengan case.');
        break;
}