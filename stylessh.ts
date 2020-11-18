/*
    String.prototype.includes()
    Este método se encarga de buscar cadenas de textos dentro de otras.
    Devuelve un booleano ( false o true ) dependiento del resultado.
*/

/**
 * String search.

 * @param {string} baseString - Es el string base que contendrá todo el texto.
 * @param {string} stringToSeach - Representa el texto que se quiere buscar dentro del string base.
 * @param {number} [position = 0] - Indica la posición de donde vamos a empezar a buscar el string.
 
 * @returns {boolean} Si el texto se encuentra o no.
 */
function searchText(
  baseString: string,
  stringToSeach: string,
  position: number = 0
): boolean {
  return baseString.includes(stringToSeach, position);
}

const isInside = searchText("Hello world", "world");
console.log(isInside);