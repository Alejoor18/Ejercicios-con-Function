function calcularPrecio(copias) {
    let precioPorCopia;

    if (copias >= 1000) {
        precioPorCopia = 50;
    } else if (copias >= 750) {
        precioPorCopia = 80;
    } else if (copias >= 500) {
        precioPorCopia = 100;
    } else {
        precioPorCopia = 120;
    }

    return precioPorCopia;
}

let copias = parseInt(prompt("Ingrese la cantidad de copias a imprimir:"));
let precioPorCopia = calcularPrecio(copias);
let precioTotal = copias * precioPorCopia;

alert("Precio por copia: $" + precioPorCopia + " y su precio total: $" + precioTotal);
