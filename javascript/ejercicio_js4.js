/*********** Ejercicio 4 ***************/ 
// Valores comunes
// Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

const intersection = arrNumber1.filter(number => arrNumber2.indexOf(number) !== -1).filter(number => arrNumber3.indexOf(number) !== -1);

console.log(intersection);
