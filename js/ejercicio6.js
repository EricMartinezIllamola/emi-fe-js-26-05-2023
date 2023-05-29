let numero = +prompt("Introduzca un numero entero positivo:");

if (Math.floor(numero) != numero || numero <= 0) {
    do {
        numero = +prompt("Numero no valido, introduzca un numero entero positivo:");
    } while (Math.floor(numero) != numero || numero <= 0);
}

console.log(numero.toString().length);
