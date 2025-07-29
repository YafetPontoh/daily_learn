function add(numA, numB){
    return numA + numB;
}

add("5",3)  // Seharusnya ini 8. Karena dynamic, dan tidak mendefinisikan tipe datanya, maka ini menjadi 58.