/**
 * Explicación del método includes
 *
 * includes es un método disponible para Arrays o cadenas de texto (string)
 * este método lo que realiza es una validación dentro de array o string
 * validando si el parámetro que le enviamos coincide con alguna propiedad del array o validando si la cadena de texto incluye el texto que pasamos por parámetro, en ambos casos retorna un valor booleado, true en caso de existir,
 * false en caso que no, también hay que tomar en cuenta que es case sensitive,
 * esto quiere decir que es sensible a mayúsculas, minúsculas o símbolos.
 * Lo mostramos en el siguiente ejemplo.
 *
 * const texto = "Este es un texto de prueba."
 *
 * texto.includes("prueba") -> esto retorna true
 * texto.includes("este") -> esto retorna false ya que la palabra "este" no
 * coincide porque en la variable texto está en mayúsculas.
 *
 * Ahora con Arrays.
 *
 * const array = ["hola", "esta", "es", "una", "prueba"]
 *
 * array.includes("hola") -> retorna true
 * array.includes("Prueba") -> retorna false
 */

/**
 * Explicación de la función searchProperty
 * @function
 * @name searchProperty
 * @param {string | number|any} prop - Property to find
 * @param {Array<any>|string} data - variable where to look for the prop
 */

const data = "Este es un string de prueba"
const arr = [1, "test", "hola"]


function searchProperty(prop: string | number | any, data: Array<any> | string): boolean {
    return data.includes(prop)
}


console.log(searchProperty("prueba", data)) //return true
console.log(searchProperty("prueba", arr)) //return false
console.log(searchProperty("Test", arr)) //return false
console.log(searchProperty(1, arr)) //return false
