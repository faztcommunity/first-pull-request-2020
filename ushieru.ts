/**
 * String.prototype.slice()
 * Extrae una "rebanada" o porción de una cadena segun las posiciónes que le indiquemos
 * (empezando desde la posicion 0) y devuelve una nueva cadena
 * 
 *  String.slice(corteInicial [, corteFinal])
 */

/**
 * Rebana una cadena y devuelve la rebanada como una nueva cadena
 * @param {string} string Cadena a rebanar
 * @param {number} corteInicial Donde empezara a cortar
 * @param {number} corteFinal Donde terminara el corte de la cadena
 * @returns {string} Nueva cadena 
 */
const rebanar = (string: string, corteInicial: number, corteFinal: number = string.length): string => string.slice(corteInicial, corteFinal)

const example = 'Hello World!'

const hello = example.slice(0, 5)
const world = example.slice(6, 11)
const exclamation = example.slice(11)

console.log(rebanar(example, 0, 5), rebanar(example, 6, 11), rebanar(example, 11))
console.log(hello, world, exclamation)
