import {doSomething} from './utils.js'

function onFulfilled(doSomethingData){
    console.log(doSomethingData);
};

function onRejected(doSomethingError){
    console.log(doSomethingError);
};

doSomething().then(onFulfilled, onRejected);