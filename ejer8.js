function obtenerValorSuscripcion(opcion) {
    if (opcion === 1) return 18000;
    if (opcion === 2) return 35000;
    if (opcion === 3) return 86000;
    return 0; // Para opciones inválidas
}

let opcion = parseInt(prompt("Ingrese la opción de suscripción:\n1. 15 días - $18,000\n2. 30 días - $35,000\n3. 3 meses - $86,000"));

let valor = obtenerValorSuscripcion(opcion);
alert("El valor de su suscripción es: $" + valor);
