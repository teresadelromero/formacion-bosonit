/************************************** Ejercicio 9 **************************************
Crea una función que a partir de un objeto de entrada, retorne un objeto
asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
Ejemplo de uso de la función

*/
function toLowercaseKeys(object){
    for(key in object){
        newKey = key.toLowerCase();
        object[newKey] = object[key];
        delete object[key]; 
    }
    return object;
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }