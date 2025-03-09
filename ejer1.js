function calcularSalario() {
    let nombre = prompt("Ingrese su nombre:");
    let horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));

    let tarifa = horas <= 10 ? 30000 : 33000;
    let salario = horas * tarifa;

    alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario es $${salario}`);
}

calcularSalario();
