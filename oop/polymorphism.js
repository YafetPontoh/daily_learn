class SmartPhone{
    constructor(color,brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log(`charging ${this.model}`);
    }
}

class Android extends SmartPhone{
    // Overriding Constructor
    constructor(color, brand, model, device){
        // Wajib memanggil method super()
        super(color, brand, model);
        this.device = device;
    }

    // Menulis ulang method yang ingin di override.
    charging(){
        super.charging();
        console.log(`Charging ${this.model} with fast charging`);
    }

    splitScreen(){
        console.log('Android have a split screen');
    }
}

const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');

android.charging();