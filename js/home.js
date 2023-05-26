// Crear etiquetas en tiempo de ejecución

document.write("<h3>Etiqueta nueva</h3>");

// Recuperar información de un elemento de mi HTML

let titulo = document.getElementById("titulo");
console.log(titulo);

titulo.innerHTML = "JS";

// Recuperar un conjunto de etiquetas HTML

let bx = document.getElementsByClassName("bx");
console.log(bx);

bx[0].innerHTML = "Nuevo contenido desde JS"
console.log(bx[0]);

// Recuperar valor del input

let imprimir = () => {
    let inp = document.getElementById("txt").value;
    console.log(inp);
    document.getElementById("bx-1").innerHTML = inp;
}

