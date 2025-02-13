import _ from 'underscore';

import { deck, puntosJugadores, pedirCarta, inicializarJuego, turnoComputadora, crearCarta, acumularPuntos } from './usecases'

const miModulo = (() => {

    'use strict'


    //Referencias HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');


    //Eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(puntosJugadores, carta, 0);

        crearCarta(carta, 0)

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugadores, deck);
        } else if (puntosJugador === 21) {
            console.log('21, Genial');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugadores, deck);
            // alert('21, Genial');
        }
    });


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores, deck);
    });

    btnNuevo.addEventListener('click', () => {

        console.clear();
        inicializarJuego();

    });

    return {
        nuevoJuego: inicializarJuego
    }

})();