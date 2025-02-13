import { pedirCarta } from './pedir-carta';
import {determinarGanador} from './determinar-ganador'
import {acumularPuntos} from './acumular-puntos'
import { crearCarta } from './crear-carta';

    // Turno de la computadora
    export const turnoComputadora = ( puntosJugadores, deck) => {

        console.log({puntosJugadores})

        let puntosComputadora = 0;

        let puntosMinimos = puntosJugadores[0];

        do {
            const carta = pedirCarta(deck);
            let puntosJugadoresLength = puntosJugadores.length - 1;
            puntosComputadora = acumularPuntos(puntosJugadores, carta, 1);
            crearCarta( carta, puntosJugadoresLength);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador(puntosJugadores);
    };






