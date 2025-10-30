let pares = [];
let impares = [];

for (let i = 0; i < 31; i++) {
    if (i % 2 === 0) {

        pares.push(i);

    }else{

        impares.push(i);

    }
}

console.log(`Números pares del 1 al 30: ${pares}` );
console.log(`Números impares del 1 al 30: ${impares}` );
