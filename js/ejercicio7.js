let eur = +prompt("Introduzca la cantidad de euros:");
let moned = prompt("Introduxca la divisa que desea (libra, dolar o yen):");
let libra = 0.86;
let dolar = 1.28611;
let yen = 129.852;

const cambioDivisa = (euros, moneda) => {
    let cambio = 0;
    let total = 0;
    if (moneda == "libra") {
        cambio = libra;
    }
    if (moneda == "dolar") {
        cambio = dolar;
    }
    if (moneda == "yen") {
        cambio = yen;
    }
    return total = euros * cambio;
    // console.log(total + moneda);
}

console.log(cambioDivisa(eur,moned) + " " + moned);