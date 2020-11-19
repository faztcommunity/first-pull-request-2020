/**
 * 
 * Array.prototype.forEach()
 * El método forEach() ejecuta la función indicada una vez por cada elemento del array.
 * 
 * arr.forEach(function callback(currentValue, index, array) {
 *   // tu iterador
 * }[, thisArg]);
 * 
 * callback: Función a ejecutar por cada elemento, que recibe tres argumentos:
 * currentValue: El elemento actual siendo procesado en el array.
 * index: El índice del elemento actual siendo procesado en el array.
 * array: El vector en el que forEach() esta siendo aplicado.
 * thisArg: Valor que se usará como this cuando se ejecute el callback.
 * 
 **/

const API_URL = 'https://jsonplaceholder.typicode.com/users'
const $list = document.getElementById('list')

init()

async function init() {
    showUsers( await getData() )
}

/**
 * Rebana una cadena y devuelve la rebanada como una nueva cadena
 * @param {Object[]} users Arreglo de usuarios
 */
function showUsers(users) {
    $list.textContent = ''
    users.forEach(user => {
        $list.innerHTML += `<li>${user.name}</li>`
    })
}

/**
 * Obtiene información desde una API
 * @returns {Object[]} Arreglo de usuarios
 */
async function getData() {
    const res = await fetch(API_URL)
    return data = await res.json()
}
