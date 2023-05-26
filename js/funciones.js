//Suma de dos variables

let A = 10;
let B = 11;

let resultado = A + B;
console.log(resultado);

// Funciones < ES5

function suma(valorA, valorB) {
    resultado = valorA + valorB;
    console.log(resultado);
}

suma(3,7);
suma(20,56);
suma(A,B);

function resta(valorA, valorB) {
    resultado = valorA - valorB;
    return resultado;
}

console.log(resta(10,7));
console.log(resta(B,A));
console.log(resta(A,B));