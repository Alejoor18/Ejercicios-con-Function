function diagnosticarComputadora(pitido, discoGira) {
    if (pitido === "si" && discoGira === "si") {
        return "Póngase en contacto con el técnico de apoyo";
    } else if (pitido === "si" && discoGira === "no") {
        return "Verificar contactos de la unidad";
    } else if (pitido === "no" && discoGira === "no") {
        return "Traiga la computadora para repararla en la central";
    } else {
        return "Compruebe las conexiones de altavoces";
    }
}

let pitido = prompt("¿La computadora emite un pitido al iniciar? (si/no)");
let discoGira = prompt("¿El disco duro gira? (si/no)");

alert(diagnosticarComputadora(pitido, discoGira));
