function esPar(numero) {
    return numero % 2 === 0 ? "El número es par." : "El número es impar.";
}

let numero = parseInt(prompt("Ingrese un número:"));
alert(esPar(numero));
