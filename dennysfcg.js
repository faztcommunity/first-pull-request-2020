/**
 * Add two numbers together
 * @param  {Array} arr Arreglo de numeros
 * @return {Number}   El numero mayor
 */

function numeroMayor(arr){
   let mayor=0;
   arr.forEach(el=>{
       
       if(el>mayor){
        mayor=el;
       }
   })
   return mayor;
}
const arr=[3,12,64,423];

console.log(numeroMayor(arr));
