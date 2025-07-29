class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    };
};

// const fetchingIserFromInternet = (isOffline) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             !isOffline ? resolve({name : 'Yafet', age : 22}):reject(new NetworkError('Cannot get user data: You are offline'), null);
//         }, 500);
//     });
// };

// const gettingUserName = async() => {
//     try{
//         const user = await fetchingIserFromInternet(false);
//         return user.name;
//     } catch (error){
//         console.log(error.message);
//     }
// };

// // Ini dinamakan immediately Invoked Function Expression (IIFE)
// (async () => {
//     console.log(await gettingUserName());
// })();

// Cara seperti di Dicoding
const fetchingUserFromInternet =
    (isOffline) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isOffline){
                    reject(new NetworkError('Cannot Get User Data : You Are Offline!'));
                    return;
                }

                resolve({name : "Yafet", age : "22"});
            }, 500); 
        });

    };

const gettingUserName = async() => {
    try{
        const user = await fetchingUserFromInternet(false);
        return user.name;
    } catch (error){
        if (error instanceof NetworkError){
            console.log(`Error jaringan : ${error.message} `);
        } else {
            console.error(`Terjadi kesalahan  tak terduga : ${error.message}`);
        } 
        return null;
    }
};

(async () => {
    console.log(`Getting Data: Username.... (Online)`);
    const userName = await gettingUserName();
    if(userName){
        console.log(`Username :${userName}`);
    } else{
        console.log(`Gagal mengambil data username`);
    }

    console.log(`\n---`);

    console.log(`Getting Data: Username.... (Offline)`);
    try{
        await fetchingUserFromInternet(true);
        console.log(`Ini tidak tercetak jika simulasi offline berhasil`);
    }catch(error){
        console.log(`Pesan error offline : ${error.message}`)
    };
})();