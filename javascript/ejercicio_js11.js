/************************************** Ejercicio 11 **************************************
Crea una función que tome un array como parametro y lo divida en arrays
nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
● El primer parámetro es el array entero que se quiere dividir.
● El segundo parámetro es el número de elementos que deben tener los
arrays en los que se divida el array original del primer parámetro.
Ejemplo de uso de la función:
*/

const result5 = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result5); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

function splitArrayIntoChunks(arrayToSplit, numberOfChunks){
    let chunkedArray= [];
    
    for (let i = 0;  i < arrayToSplit.length; i += numberOfChunks) {
        chunkedArray.push(arrayToSplit.slice(i, i + numberOfChunks));
    }
    return chunkedArray;
}