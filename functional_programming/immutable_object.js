const user ={
    name : "Yafet",
    email : "yafet@gmail.com",
};

// Object.freeze()
Object.freeze(user);

// Trying to change property from freeze object
user.email = 'pontoh@gmail.com';
console.log(user);

// Rekursif object
function deepFreeze(object){
    Object.keys(object).forEach((name) => {
        const prop = object[name];
        if (typeof prop == 'object' && prop !== null){
            deepFreeze(prop);
        }
    });
    return Object.freeze(object);
};

const complexUser = {
    name : "Yafet",
    email : "yafet@gmail.com",
    preferences : {
        newsletter: true,
        notifications: 'weekly',
        address: {
            city: 'Tangerang',
            zip: '15121'
        }
    }
};

deepFreeze(complexUser);
complexUser.preferences.address.city = 'Tangerang Selatan';
console.log(complexUser.preferences.address.city);  // Output: 'Tangerang'