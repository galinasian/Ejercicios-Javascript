//Ejercicio 2: escribe un programa que dado dos string compruebe si los dos primeros caracteres y los dos últimos son iguales.  //


const comprobarPrimerCaracter = (str1, str2) => {
const primerCaracterStr1 = str1[0];
const primerCaracterStr2 = str2[0];

if(primerCaracterStr1 === primerCaracterStr2) {
  return true;
  }
  return false;
}
const str1 = `hola, esto es una prueve`;
const str2 = `hola, esto es una prueba`;
const coincidencia = comprobarPrimerCaracter(str1, str2);
//esto es como un if pero más reducido, se le llama valor ternario
(coincidencia) ? console.log(`son iguales`) : console.log(`No son iguales`);

//este es if es igual qie lo anterior
// if(coincidencia){
//   console.log(`Son iguales`);
// }
// else{
//   console.log(`No son iguales`);
  
//averiguar la última posición
const comprobarUltimoCaracter = (str1, str2) => {
  if(str1[str1.length - 1] === str2[str2.length - 1]){
    return true;
  }
  return false;
}
const str1 = `Hola, como estas`;
const str2 = `Hola, bienvenids`;
const coincidenciaPrimer = comprobarPrimerCaracter(str1, str2);
const coincidenciaUltimo = comprobarUltimoCaracter(str1, str2);


  

