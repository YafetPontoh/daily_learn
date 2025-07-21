// Jika func/var/method belum di deklarasikan
export const name = 'Yafet';

// Jika func/var/method sudah di deklarasikan
const room = 'XII6';
const study = 'Pamulang University';

export {room, study};

export default function names(name){
    console.log(`Hello, my name is ${name}`);
}

export function about(moveRoom, room, study){
    console.log(`My room in ${room}, but I'm move to ${moveRoom}. I'm from ${study}`);
}