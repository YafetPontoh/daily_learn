function promiseExecutor(resolve, reject){
    setTimeout(() => {
        console.log(`Melakukan sesuatu sebelum promisa diselesaikan.`);

        const number = Math.random();

        if(number > 0.5){
            resolve(`You did it!`);
        } else{
            reject(new Error(`Sorry, something went wrong!`));
        }
    }, 2000);
};

function doSomething(){
    return new Promise(promiseExecutor);
}