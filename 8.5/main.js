//Ejercicio 5: escribe un programa que extraiga una porción del array a partir de una posición inferior y una superior y lo almacene en otro array.   //

const extraer = (array, posicionInferior, posicionSuperior) => {
  
  //comprueba que la posicionInferior no sea igual o mayor que la posicionSuperior
  if(posicionInferior >= posicionSuperior)  {
    return [];
  } 

  const longitud = array.length;
  
  if (posicionInferior > longitud - 1){
    return[];
  }
 
    return array.slice(posicionInferior, posicionSuperior + 1) 
};

const colores = [`amarillo`, `rojo`, `verde`, `blanco`, `azul`, `negro`];

console.log(extraer(colores, 1, 2));
console.log(extraer(colores, 3, 2));



// const coloresExtraido = extraer(colores, 1, 2);

// console.log(coloresExtraido);
