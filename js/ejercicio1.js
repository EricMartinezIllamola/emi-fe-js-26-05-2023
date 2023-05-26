const areaCir = (radio) => {
    return (radio**2) * Math.PI; 
}

const areaTri = (base, altura) => {
    return (base * altura) / 2; 
}

const areaCua = (lado) => {
    return lado**2;
}

let figura = prompt("Introduzca el tipo de figura (circulo, triangulo, cuadrado):");

if (figura == "circulo") {
    let radio = +prompt("Introduzca el radio del circulo:");
    console.log(areaCir(radio));
}

if (figura == "triangulo") {
    let base = +prompt("Introduzca la base del triangulo:");
    let altura = +prompt("Introduzca la altura del triangulo:");
    console.log(areaTri(base, altura));
}

if (figura == "cuadrado") {
    let lado = +prompt("Introduzca el lado del cuadrado:");
    console.log(areaCua(lado));
}