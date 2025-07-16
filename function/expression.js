const res = function(x,y){
    const nilai  = (x + y)/2;
    let result = "";
    if(nilai > 70){
        result = 'Selamat anda lulus';
    } else {
        reslut = `Nilai kamu ${nilai}. Latihan lagi yaa`;
    }

    return result;
}

console.log(res(90,80));

// First-Class Citizen

const grade = function(result){
    let grading = "";
    if(result=='Selamat anda lulus'){
        grading = 'A';
    } else{
        grading = `Nilai kamu belum diinput sebelum remedial dan lulus!`;
    }

    return grading;
}

console.log(grade(res(90,80)));

// Mengembalikan Function dari suatu Function
function calculator(x){
    return function (num){
        return x * num;
    };
}

const double = calculator(30);

/* Code tersebut mengembalikan function
* function(num){
*    return 30 * num;
*    }
* Sehingga kita harus menginput parameter lagi ketika kita membuat variable untuk menyimpan nilai tersebut
* console.log(double(10)); --> ini karena kita menyimpannya di variable double
* output : 300
*/

console.log(double(10)); // 300