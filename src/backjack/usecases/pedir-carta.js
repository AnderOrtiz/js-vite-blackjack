/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo: [3S', 'JH', '9D', 'AD',...]
 * @returns retorna el una carta del deck
 */


export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw new Error('No hay cartas en el deck');
    };

    return deck.pop();
}