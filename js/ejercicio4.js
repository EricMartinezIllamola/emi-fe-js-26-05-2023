let numero = +prompt("Introduzca un numero:");
let acumulado = 1;

const factorial = (numero) => {
    for (let i = 1; i <= numero; i++) {
        acumulado = acumulado * i;
    }
    return acumulado;
}

console.log(factorial(numero));