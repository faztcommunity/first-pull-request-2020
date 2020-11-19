// Metodo Reduce

// Es un metodo que recibe una funcion reducer con dos parametros:
// 1. El acumulador y un elemento que estará iterando
// 2. Un valor inicial de ese acumulador que puede ser un array o un objeto vacío.

// Un ejemplo simple:
// 1. Definimos una funcion con un acumulador y el elemento a iterar
const sumar = (acc, el) => acc + el

// 2. Le pasamos el valor inicial que en este caso será 0
/**
 * @param {Array} [arr] - arr es un array de numero enteros
 */
function sum(arr) {
  return arr.reduce(sumar, 0)
}

const numbers = [1, 2, 5, -6]
// sum(numbers) // 2

// Tambien podemos usarlo para aplanar un array de arrays
// input  [1, 2, [3, [4, 5, 6], 7], 8, 9, [10]]
// output [1, 2, 3, [4,5,6], 7, 8, 9, 10]

// Metodo reduce usa una function reductora con un elemento iterador (el) y un valor inicial []

function flatten(arr) {
  return arr.reduce((acc, el) => acc.concat(el), [])
}

/**
 * @param  {Array<Array>} [nested] - nested es un array de arrays
 **/

const nested = [1, 2, [3, [4, 5, 6], 7], 8, 9, [10]]
flatten(nested)
