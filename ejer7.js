function calcularAyuda(genero, edad) {
    if (genero === "femenino") {
        if (edad > 50) return 120000;
        if (edad >= 30) return 100000;
    } else if (genero === "masculino") {
        return 40000;
    }
    return 0; 
}

let genero = prompt("Ingrese su género (femenino/masculino):");
let edad = parseInt(prompt("Ingrese su edad:"));

alert("El valor de ayuda mensual es: $" + calcularAyuda(genero, edad));
