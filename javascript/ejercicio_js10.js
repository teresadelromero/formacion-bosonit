/************************************** Ejercicio 10 **************************************
Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
Ejemplo de uso de la función:

*/

const result4 = removeHTMLTags('<div><span>lorem</span><strong>ipsum</strong></div>');
console.log(result4); // lorem ipsum

function removeHTMLTags(stringToFormat){
    const formatedString = stringToFormat.replace(/<[^>]*>/g, ' ');
    return formatedString;
}