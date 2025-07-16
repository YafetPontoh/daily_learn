// Arrow Function

const convertCelcius = (temperature) => {
    const result = (9/5) * temperature + 32;
    return result;
};

const temperatureToFarenheit = convertCelcius(90);
console.log(`Hasil Konversi : ${temperatureToFarenheit}`); // Hasil Konversi : 194

// Arrow Function versi ringkas
const convert = (temperature) =>
    (9/5) * temperature + 32;

const temperature = convert(100);
console.log(`Hasil Konversi : ${temperature}`);