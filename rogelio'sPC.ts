/**
 * array.forEach():
 * Se encarga de obtener cada uno de los valores que se encuentran dentro del array 
 * que se está recorriendo. Esto es una forma mejorada o simplificada de el uso de un
 * "for" convencional
 * 
 * Parámetros:
 *      - Un Callback, donde como parámetro recibe el valor dentro del array
 * 
 * Sintaxis:
 *      - array.forEach(valor => ....)
 */

// Ejemplo
const array: string[] = ["Rogelio", "Manuel", "Javier", "Daniel", "Rodrigo"];

array.forEach(element => console.log("Hola mi nombre es: ",element)); // Imprimo cada nombre por consola

// Ejemplo encapsulando el código para la reutilización

/**
 * Muestra el conjunto de nombres en manera de lista
 * @param names Array de nombres
 */
function showNames(names: string[]): void {
    names.forEach(name => console.log("*", name));
}

/**
 * Mostrará en consola: 
 *      * Rogelio
 *      * Manuel
 *      * Javier
 *      * Daniel
 *      * Rodrigo
 */
showNames(array);
