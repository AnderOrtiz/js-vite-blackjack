export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Empate');
        } else if ((puntosMinimos > 21) || (puntosComputadora === 21)) {
            alert('Computadora Gana');
        } else if ((puntosComputadora > 21) || (puntosMinimos <= 21 && puntosMinimos > puntosComputadora)) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 10);
}