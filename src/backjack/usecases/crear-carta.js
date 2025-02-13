import {divCartasJugadores} from './inicializar-juego'


export const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `../assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}