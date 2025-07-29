export function makeCoffee(name, callBack){
    const estimationTime = 5000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimationTime/1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuat kopi ${inSecond} detik`);

    setTimeout(() => {
        const number = Math.random();
        if(number > 0.3){
            isSuccess = true;
        };

        if(!isSuccess){
            callBack(new Error('Gagal membuat kopi'), null);
            return;
        };
        console.log(`Pramusaji selesai membuat kopi.`);
        callBack(null, name);
    }, estimationTime);
};

export function sendCoffee(name, callBack){
    const estimationTime = 2000;
    let isSuccess = false;

    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    setTimeout(() => {
    const number = Math.random();

    if(number > 0.3){
            isSuccess = true;
    }

    if(!isSuccess){
        callBack(new Error('Gagal mengantarkan kopi'), null);
        return;
    };

    console.log('Pramusaji sudah sampai ke meja');
    callBack(null, name);
    }, estimationTime);
};