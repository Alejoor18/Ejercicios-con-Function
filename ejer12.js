function verificarDefecto(modelo) {
    let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    return modelosDefectuosos.includes(parseInt(modelo)) 
        ? "El automóvil está defectuoso, llevar a garantía." 
        : "El modelo ingresado no presenta defectos conocidos.";
}

let modelo = prompt("Ingrese el número de modelo de su automóvil:");
alert(verificarDefecto(modelo));
