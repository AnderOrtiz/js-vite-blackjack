import { valorCarta } from "./valor-carta";
import { puntosHTML } from "./inicializar-juego";



export const acumularPuntos = ( puntosJugadores, carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}