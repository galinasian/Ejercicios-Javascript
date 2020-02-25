/*Ejercicio 3: escribe un programa que almacene tres ángulos de un triángulo en variables de tipo entero (angulo1, angulo2 y angulo3). Crea un condicional que compruebe si esos tres ángulos juntos pueden formar un triángulo (los ángulos de un triángulo suman siempre 180 grados).  */

const angulo1 = 45;
const angulo2 = 45; 
const angulo3 = 80;

if (angulo1 + angulo2 + angulo3 === 180) {
  console.log("la suma de los ángulos es 180º")
} else {
  console.log("La suma de los ángulos no es 180º");
  
}