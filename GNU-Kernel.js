/*
El método test () prueba una coincidencia en una cadena. Este método devuelve verdadero si encuentrauna coincidencia, de lo contrario devuelve falso.
*/

/**
* Valida un email segun el estandar.
* @constructor
* @param { string } email - El email que se va a validar segun la expresion regular.
*/

function validEmail(email) {
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  emailRegex.test(email) ? console.log(`El email ${ email } es valido`) : console.log('Email no valido') 
  
}

validEmail('test@gmail.com');
