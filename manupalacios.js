/**
 * El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
 *
 * parámetros
 *  callback:
 *      Función que comprueba cada elemento del array para ver si cumple la condición (también llamada predicado).
 *      Retorna true si el elemento la cumple o en caso contrario retornará false. Acepta tres parámetros:
 *
 *  thisArg (Optional)
 *      Valor a utilizar como this cuando se ejecuta callback.
 */

/**
 *
 * Analiza los elementos de un array, y devuelve un nuevo array que contiene los números pares
 *
 * @param {Array} numeros      Array con los números a filtrar
 *
 * @returns {Array}     Array que contiene solo los números pares
 */
function filtrarPares( numeros ) {
    return numeros.filter( numero => (numero % 2) === 0 );
}

const pares = filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(pares);
