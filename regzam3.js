/**
 * El método .map() de los Arrays
 * Es un método que recorre los elementos del array que lo invoca y devuelve otro array con los elementos mutados por el callback.
 * Este método toma como argumento una función(callback) que define los siguientes parámetros en este orden.
 *
 * arrayOriginal.map(function (element [, indexOfElement, thisArray]) {
 *      // code...
 * });
 *
 * .map() no muta directamente el array original que lo invoca.
 *
 * Ejemplo:
 *
 *      const arrayOriginal = [1, 2, 3, 4, 5];
 *
 *      const arrayResultante = arrayOriginal.map(function (num) {
 *      	return num * 2;
 *      });
 *
 *      console.log('<========================== Array original ==========================>');
 *      console.log(arrayOriginal);
 *
 *      console.log('<========================= Array resultante =========================>');
 *      console.log(arrayResultante);
 *
 */

/**
 * Demostración del método Array.prototype.map()
 * @param {number} numero - Tiene que ser un número mayor a 0.
 */
function puntoTres(numero) {
    const arrayOriginal = [1, 2, 3, 4, 5];

    const arrayResultante = arrayOriginal.map(function (num) {
        return num * numero;
    });

    console.log(
        "<========================== Array original ==========================>"
    );
    console.log(arrayOriginal);

    console.log(
        "<========================= Array resultante =========================>"
    );
    console.log(arrayResultante);
}
