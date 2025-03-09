function encontrarMayor(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

let n1 = parseInt(prompt("Ingrese el primer número:"));
let n2 = parseInt(prompt("Ingrese el segundo número:"));
let n3 = parseInt(prompt("Ingrese el tercer número:"));

alert("El número mayor es: " + encontrarMayor(n1, n2, n3));
