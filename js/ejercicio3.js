let numero = +prompt("Introduzca un numero entero:");
let sum = 0;
let A = 0;
let esPrimo = false;

const numPrimo = (numero) => {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            A = 1;
        } else {
            A = 0;
        }
        sum = sum + A;
        }
    if (sum == 0) {
        esPrimo = true;
    } else {
        esPrimo = false;
    }
    return esPrimo;
}

console.log(numPrimo(numero));