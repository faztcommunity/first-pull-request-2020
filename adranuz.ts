/*
    Array.prototype.map()
    Este método se encarga de iterar en el array para obtener uno nuevo a partir del primero
    Devuelve el array trasformado, nuevo o resultado de los returns de la iteracion
*/

/**
 * Esta funcion itera en las posiciones del array obtenido
 * y regressa un array con los numeros multiplicados por 2 
 * y aquellos datos que no sean numeros los sobreescribe como NaN
 * 
 * @param {Array<any>} param - array
 * @return {Array<number|string>} retorna un array editados
 */
function mapeando (param: Array<any>) {
  return param.map(valor => {
    if(!isNaN(valor)) {  
      return valor * 2;
    } else {
      return 'NaN'
    }
  })
}

const mapeados: Array<number|string> = mapeando([1,2,3,4,5,6,7,'ocho'])

console.log(mapeados)