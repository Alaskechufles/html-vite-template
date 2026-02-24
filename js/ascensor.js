let pisoActual = 1;
const TOTAL_PISOS = 10;
let texto = "";
let flechaSubida = true;
function mostrarPisos() {
    texto = ""
    for (let i = 1; i <= TOTAL_PISOS; i++) {
        if (i === pisoActual) {
            texto += `[${i}] `;
        } else {
            texto += `${i} `;
        }
    }
    alert(texto + `
    ${flechaSubida ? "➡️" : "⬅️"}`);
}
function pedirPiso() {
    let entrada = prompt(`
    ${texto}
    ¿A qué piso deseas ir? (0 para salir)`);
    return parseInt(entrada);
}
function validarPiso(piso) {
    if (isNaN(piso)) {
        alert("Debes ingresar un número válido.");
        return false;
    }
    if (piso < 0 || piso > TOTAL_PISOS) {
        alert("Piso fuera de rango.");
        return false;
    }
    return true;
}
function moverAscensor(destino) {
    if (destino === pisoActual) {
        alert("Ya estás en ese piso.");
        return;
    }
    while (pisoActual !== destino) {
        if (destino > pisoActual) {
            flechaSubida = true
            pisoActual++;
        } else {
            flechaSubida = false
            pisoActual--;
        }
        if (destino !== pisoActual) {
            mostrarPisos();
        }
    }
}
function iniciarSimulador() {
    while (true) {
        mostrarPisos();
        let pisoDestino = pedirPiso();
        if (pisoDestino === 0) {
            alert("Fin del simulador.");
            break;
        }
        if (!validarPiso(pisoDestino)) {
            continue;
        }
        moverAscensor(pisoDestino);
    }
}
iniciarSimulador();


//holaaaconso