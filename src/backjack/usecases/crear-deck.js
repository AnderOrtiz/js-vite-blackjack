import _ from 'underscore'

/**
 * Esta función crea un nuevo 
 * @param {Array<string>} tiposEspeciales Ejemplo: ['C', 'D', 'H', 'S'];
 * @param {Array<string>} tiposDeCarta Ejemplo: ['A', 'J', 'K', 'Q'];
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDeCarta es obligatorio como un arreglo de strings')

    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un arreglo de strings')

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
    return deck ;
}