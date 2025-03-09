function calcularCostoSandwich(tamano) {
    if (tamano === "pequeño") return 6000;
    if (tamano === "grande") return 12000;
    return 0;
}

let opcion = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");
let total = calcularCostoSandwich(opcion);

if (total > 0) {
    if (prompt("Desea tocineta (sí o no):") === "sí") total += 3000;
    if (prompt("Desea pavo (sí o no):") === "sí") total += 3000;
    if (prompt("Desea queso (sí o no):") === "sí") total += 2500;

    alert("El costo total de su sándwich es: $" + total);
} else {
    alert("Tamaño no válido");
}
