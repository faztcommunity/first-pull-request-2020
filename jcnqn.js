/**
 *  El método reduce() aplica una función a un acumulador 
    y a cada valor de una array (de izquierda a derecha) 
    para reducirlo a un único valor. 

    
 * @param {number[]} arrayNumeros Array de numeros que seran promediados 
 * @return {number} Retorna un número real.
 */

function promedio(arrayNumeros) {
  if (arrayNumeros.length > 0) {
    let resultado = arrayNumeros.reduce(
      (acumulado, numero) => acumulado + numero
    );
    return resultado / arrayNumeros.length;
  } else {
    return 'El array ingresado debe tener al menos un parámetro';
  }
}
