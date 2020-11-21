/** Se escribe el rif del usuario dinamicamente, 
 * porfavor colocar siempre bajo esta secuencia
 * (j123456789)
 */
var rif = prompt('Por favor colocar el rif')


/**
 * 
 * @param {string} rif recibe el rif del usuario
 */
function serializarRif(rif) {


    let valueRif = rif //Valor que recibe el prompt

    let agarrandoLaJ = valueRif.charAt(0) + '-' //primero guardamos en una variable la J
    let primeros8 = valueRif.slice(1, -1) // luego agarramos lo 8 numeros
    let ultimoValor = valueRif.slice(-1) // luego cogemos el ultimo numero
    let rifComplete = agarrandoLaJ + primeros8 + '-' + ultimoValor // a la final concatenamos todo


    alert('El rif es: ' + rifComplete)
}

/** Mandamos como parametro el rif */
serializarRif(rif)