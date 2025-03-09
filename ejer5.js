function calcularCalificacion(fisica, quimica, biologia, matematicas, informatica) {
    let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
    let porcentajeFinal = (sumaCalificaciones / 50) * 100;
    let calificacion = porcentajeFinal < 60 ? "Mala" : porcentajeFinal <= 80 ? "Buena" : "Excelente";
    
    return `Tu porcentaje es ${porcentajeFinal}% y tu calificación es ${calificacion}.`;
}

let fisica = parseInt(prompt("Ingrese su calificación en Física:"));
let quimica = parseInt(prompt("Ingrese su calificación en Química:"));
let biologia = parseInt(prompt("Ingrese su calificación en Biología:"));
let matematicas = parseInt(prompt("Ingrese su calificación en Matemáticas:"));
let informatica = parseInt(prompt("Ingrese su calificación en Informática:"));

alert(calcularCalificacion(fisica, quimica, biologia, matematicas, informatica));
