const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerCarta() {
    return Math.floor(Math.random() * 11) + 1;
}

function jugarJugador(nombre) {
    let carta1 = obtenerCarta();
    let carta2 = obtenerCarta();
    let total = carta1 + carta2;

    console.log(`${nombre}: Tu primera carta es: ${carta1}`);
    console.log(`${nombre}: Tu segunda carta es: ${carta2}`);

    return new Promise((resolve) => {
        rl.question(`${nombre}, ¿quieres pedir una carta más? (si/no): `, (respuesta) => {
            if (respuesta.toLowerCase() === "si") {
                let carta3 = obtenerCarta();
                total += carta3;
                console.log(`${nombre}: Tu tercera carta es: ${carta3}`);
            }
            resolve(total);
        });
    });
}

async function iniciarJuego() {
    rl.question("Ingrese el número de jugadores (1 o 2): ", async (numJugadores) => {
        let puntajes = [];
        let nombres = numJugadores == 1 ? ["Jugador"] : ["Jugador 1", "Jugador 2"];

        for (let nombre of nombres) {
            let puntaje = await jugarJugador(nombre);
            puntajes.push({ nombre, puntaje });
        }

        let cartaCasino1 = obtenerCarta();
        let cartaCasino2 = obtenerCarta();
        let puntajeCasino = cartaCasino1 + cartaCasino2;

        console.log(`Casino: Primera carta ${cartaCasino1}`);
        console.log(`Casino: Segunda carta ${cartaCasino2}`);
        console.log(`Casino: Total ${puntajeCasino}`);

        puntajes.forEach(({ nombre, puntaje }) => {
            console.log(`${nombre} tiene un total de: ${puntaje}`);
            if (puntaje > puntajeCasino) {
                console.log(`${nombre} ¡Ganaste! 🎉`);
            } else if (puntaje < puntajeCasino) {
                console.log(`${nombre} Perdiste 😢`);
            } else {
                console.log(`${nombre} ¡Empate! 🤝`);
            }
        });

        rl.close();
    });
}

iniciarJuego();
