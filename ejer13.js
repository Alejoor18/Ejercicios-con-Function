function calcularCostoPaquete(operador, minutos) {
    let cargoFijo = 0, valorMinuto = 0, valorDatos = 0;

    if (operador === "Tigo") {
        cargoFijo = 45000;
        valorMinuto = 200;
        valorDatos = 12000;
    } else if (operador === "Claro") {
        cargoFijo = 30000;
        valorMinuto = 100;
        valorDatos = 18000;
    } else if (operador === "Movistar") {
        cargoFijo = 40000;
        valorMinuto = 250;
        valorDatos = 8000;
    } else {
        return "Operador no válido";
    }

    return cargoFijo + (minutos * valorMinuto) + valorDatos;
}

let operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):");
let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));

let total = calcularCostoPaquete(operador, minutos);
alert(total !== "Operador no válido" ? "El costo total de su paquete es: $" + total : total);
