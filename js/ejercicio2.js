let N = +prompt("Introduzca la cantidad de numeros aleatorios que desea:");
let min = +prompt("Introduzca el valor minimo:");
let max = +prompt("Introduzca el valor maximo:");

const randomNum = (min, max) => {
    let numbers = [];
    for (let i = 0; i < N; i++) {
        numbers.push(Math.floor(Math.random()*(max - min + 1)) + min);
    }
    return numbers;
}

console.log(randomNum(min, max));