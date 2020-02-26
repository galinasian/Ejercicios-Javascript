/*Ejercicio 11: escribe un programa que pida al usuario un número entero positivo (mediante la función prompt) y muestre por pantalla la cuenta atrás desde ese número hasta cero, utilizando comas como separación */

//Pedir al ususario que intruzca un número
const numero = +prompt('Introduzca un número');

//Comprobar si es un número(isNan)
if(!isNaN(numero)) {

  //cuenta atrás (for)
  let msg = '';

  for (let i = numero; i >=0; i--)  {
    msg += i + ',';
   }
   console.log(msg);
   
}
else{
  console.log('No es un número');
  
}