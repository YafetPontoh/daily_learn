// ES6 Inheritance
class SmartPhone{
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log(`Charging ${this.model}`);
    }
}

class iOS extends SmartPhone{
    airDrop(){
        console.log('iOS have a behavior AirDrop');
    }
}

class Android extends SmartPhone{
    splitScreen(){
        console.log('Android have a Split Screen');
    }
}

const ios = new iOS('black', 'A', 'Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

ios.charging();  //Charging 12 Pro Max
ios.airDrop();  // ios have a behavior AirDrop

android.charging();  // Charging Galaxy S21
android.splitScreen();  // Android have a Split Screen

// Lanjutan dari ES6 inheritance
console.log(ios instanceof SmartPhone);  // true
console.log(android instanceof SmartPhone);  //true

// Prototype Inheritance
function SmartPhone2(color, brand, model){
    this.color = color;
    this.brand = brand;
    this.model = model;
};

SmartPhone2.prototype.charging = function(){
    console.log(`Charging ${this.model}`);
};

function iOS2(color, brand, model){
    SmartPhone2.call(this, color, brand, model);
};

iOS2.prototype = Object.create(SmartPhone2.prototype);
iOS2.prototype.constructor = iOS2;

iOS2.prototype.airDrop2 = function(){
    console.log('iOS have a behavior AirDrop');
};

function Android2(color, brand, model){
    SmartPhone2.call(this, color, brand, model);
};

Android2.prototype = Object.create(SmartPhone2.prototype);
Android2.prototype.constructor = Android;

Android2.prototype.splitScreen2 = function(){
    console.log('Android have a Split Screen');
};

const ios2 = new iOS2('Black', 'A', '12 Pro Max');
const android2 = new Android2('White', 'B', 'Galaxy S21');

ios2.charging();
android2.charging();

ios2.airDrop2();
android2.splitScreen2();