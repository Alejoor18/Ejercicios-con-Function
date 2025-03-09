function calcularCostoLavado(tipoLavadora, cantidad, horas) {
    let costoPorHora = tipoLavadora === 1 ? 4000 : 3000;
    let costoTotal = cantidad * horas * costoPorHora;

    if (cantidad > 3) {
        costoTotal -= costoTotal * 0.03; 
    }

    return costoTotal;
}

let tipoLavadora = parseInt(prompt("Ingrese el tipo de lavadora (1 para grande, 2 para pequeña):"));
let cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras alquiladas:"));
let horas = parseInt(prompt("Ingrese las horas de alquiler:"));

let total = calcularCostoLavado(tipoLavadora, cantidad, horas);
alert("Costo total: $" + total);
