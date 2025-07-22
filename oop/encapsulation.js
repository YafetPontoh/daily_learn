class coffeeMachine{
    constructor(waterAmount){
        this.waterAmount = waterAmount;
        this._temperature = 90;
    };

    // makeCoffee(){
    //     console.log(`Membuat kopi dengan suhu : ${this.temperature}`);
    // };

    // Menggunakan getter dan setter
    set temperature(temperature){
        console.log('You are not allowed to change the temperature');
    };

    get temperature(){
        return this._temperature;
    };
};

const coffee = new coffeeMachine(100);
// coffee.temperature = 60;  // Mengubah nilai temparature, dari 90 menjadi 60.
// coffee.makeCoffee();  // Membuat kopi dengan suhu 60.

// Perbaikan:
console.log(`Sebelum diubah: ${coffee.temperature}`);
coffee.temperature = 100;
console.log(`Setelah diubah: ${coffee.temperature}` );

// Agar nilai benar2 tidak bisa diubah
class coffeeMachine2{
    #temperature;  // Inisiasi
    constructor(waterAmount){
        this.waterAmount = waterAmount;
        this.#temperature = this.#defaultTemperature();
    }

    set temperature(temperature){
        console.log(`You're not allow to change the temperature`);
    }

    get temperature(){
        return this.#temperature;
    }

    #defaultTemperature(){
        return 90;
    }
}

const coffee2 = new coffeeMachine2(100);
console.log(`Sebelum diubah: ${coffee2.temperature}`);
coffee2.temperature = 100;  // You're not allow to change the temperature
console.log(`Setelah diubah: ${coffee2.temperature}` );