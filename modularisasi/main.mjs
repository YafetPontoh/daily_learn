import func from './anotherFile.mjs';
// import {kali, bagi, tambah, kurang} from './aritmatika.js'
import * as hitung from './aritmatika.mjs';

func()

let a = 4;
let b = 2;
hitung.kali(a,b);
hitung.tambah(a,b);
hitung.kurang(a,b);
hitung.bagi(a,b);

// export.js -> main.js
import {name} from './export.mjs';
import {room, study} from './export.mjs';

console.log(name, room, study);

import names,{about} from './export.mjs';

try{
names(name);
let mRoom = 'Room 612';
about(mRoom, room, study);
} catch(e){
    console.error(e);
}

