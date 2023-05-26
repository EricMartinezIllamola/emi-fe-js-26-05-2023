let numero = +prompt("Introduzca un numero:");
let binario = [];

const convBinario = (numero) => {
    do {
        resto = numero % 2;
        numero = Math.floor(numero / 2);
        binario.unshift(resto);
    } while (numero != 0);
    let stringBinario = binario.join("");
    return stringBinario;
}

console.log(convBinario(numero));