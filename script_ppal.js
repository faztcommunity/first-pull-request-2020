
/**
 * 
 * Array.prototype.filter()
 * El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
 * 
 * var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
 * Parámetros
 * callback = Función que comprueba cada elemento del array para ver si cumple la condición (también llamada predicado).  
 * Retorna true si el elemento la cumple o en caso contrario retornará false. Acepta tres parámetros: 
 * 
 * currentValue
 * El elemento actual del array que está siendo procesado.
 * 
 * index [Optional]
 * El índice del elemento actual del array que está siendo procesado.
 * 
 * array [Optional]
 * El array sobre el que se ha llamado filter.
 * 
 * thisArg [Optional]
 * Opcional. Valor a utilizar como this cuando se ejecuta callback.
 * 
 * Valor devuelto
 * Un nuevo array con los elementos que cumplen la condición. Si ningún elemento cumple la condición, se devolverá un array vacío.
 * 
 */

var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  var entradasInvalidas = 0;
  // Si el elemento tiene un atributo id, y su valor correspondiente es un numero
  // Y no es el valor NaN, entonces es una entrada válida
  /** @function filtrarPorID */
  function filtrarPorID(obj) {
    if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
      return true;
    } else {
      entradasInvalidas++;
      return false;
    }
  }
  
  var arrPorID = arr.filter(filtrarPorID);
  
  console.log('Array Filtrado\n', arrPorID); 
  // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Número de Entradas Invalidas = ', entradasInvalidas); 
  // 4