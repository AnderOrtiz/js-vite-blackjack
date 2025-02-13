import { crearDeck } from "./crear-deck";

export const puntosHTML = document.querySelectorAll('small');
export const divCartasJugadores = document.querySelectorAll('.divCartas')
export let puntosJugadores = []
export let deck = [];

const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'K', 'Q'];

    // Esta funcion inicializa el juego
    export const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);
        console.log(deck)
        puntosJugadores = [];

        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerHTML = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnDetener.disabled = false;
        btnPedir.disabled = false;

        return deck;
    };
