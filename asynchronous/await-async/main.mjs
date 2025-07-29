import { doSomething } from "./utils.mjs";

// console.log('Start');

// doSomething().then(
//     (value) => {
//         console.log(value);
//     }
// );

// console.log('End');

// With Async-Await
async function promiseWithAsyncAwait() {
    try{
        console.log('Start');

        const result = await doSomething();
        console.log(result);

        console.log('End');
    } catch (error){
        console.log(error.message);
    }
}

promiseWithAsyncAwait();