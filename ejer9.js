function esTrianguloValido(a1, a2, a3) {
    return a1 + a2 + a3 === 180;
}

let angulo1 = parseInt(prompt("Ingrese el primer ángulo:"));
let angulo2 = parseInt(prompt("Ingrese el segundo ángulo:"));
let angulo3 = parseInt(prompt("Ingrese el tercer ángulo:"));

if (esTrianguloValido(angulo1, angulo2, angulo3)) {
    alert("El triángulo es válido.");
} else {
    alert("El triángulo no es válido.");
}
