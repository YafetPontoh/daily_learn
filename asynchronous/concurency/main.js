const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Menggunakan Promise.all
Promise.all([promise1, promise2, promise3]). then((value) => {
    console.log('Succes');
    console.log(value);

}) .catch((error) => {
    console.log('Failed');
    console.log(error.message);
});

// Menggunakan Promise.allSettled
Promise.allSettled([promise1, promise2, promise3]). then((value) => {
    console.log('Succes');
    console.log(value);

}) .catch((error) => {
    console.log('Failed');
    console.log(error.message);
});