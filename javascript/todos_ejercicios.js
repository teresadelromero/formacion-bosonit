/************************************** Ejercicio 1 **************************************
Dado un array de objetos, obtener el objeto con el id 3
*/

const arrNames = [ 
    {id:1, name:'Pepe'},
    {id:2, name:'Juan'},
    {id:3, name:'Alba'},
    {id:4, name:'Toby'},
    {id:5, name:'Lala'},
]

console.log(arrNames[arrNames.findIndex(x => x.id == 3)]);


/************************************** Ejercicio 2 **************************************

Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos) 
    *Dejo dos opciones: ¿Es mejor usar bucle for o forEach?

*/

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];
let truthyArray = [];
console.log(cleanArray1(arrDirty));
console.log(cleanArray2(arrDirty));


function cleanArray1(arrDirty){
    for(let i =0; i<arrDirty.length; i++){
        if(arrDirty[i]){
            truthyArray.push(arrDirty[i]);
        }
    }
    return truthyArray;
}

function cleanArray2(arrDirty){
    arrDirty.forEach((index) => {
        if(arrDirty[index]){
            truthyArray.push(arrDirty[index]);
        }
    });
    return truthyArray;
}



/************************************** Ejercicio 3 **************************************
Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales
 (Supongo que sacar se refiere a quitar del array)
*/

const arrCities = [  
    {city: 'Logroño', country: 'Spain', capital: false},  
    {city: 'Paris', country: 'France', capital: true},  
    {city: 'Madrid', country: 'Spain', capital: true},  
    {city: 'Rome', country: 'Italy', capital: true}, 
    {city: 'Oslo', country: 'Norway', capital: true},  
    {city: 'Jaén', country: 'Spain', capital: false}
]
function getCapitalCities(arrCities){
    for(let key in arrCities){
        if(!arrCities[key].capital && arrCities[key].country === 'Spain'){
            arrCities.splice(key, 1);
        }
    }
    return arrCities;
}
console.log(getCapitalCities(arrCities));


/************************************** Ejercicio 7 **************************************

Crea una función que retorne los campos de un objeto que equivalgan a un
valor “falsy” después de ser ejecutados por una función específica.
La fundación debe tener dos parámetros:
● Primer parámetro es un objeto con x número de campos y valores
● Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
Ejemplo de uso de la función:
*/


const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
console.log(result);

function returnFalsyValues(object, functionToApply){
    let falsyValues =[];

    // Loop que recorra el objeto 
    // A la funcion se le pasa el valor
    // Si el valor es false se guarda la clave y el valor 
    for ( value in object) {
        let isTrueOrFalse = (functionToApply(object[value]));
        if(!isTrueOrFalse){
            falsyValues.push(`${value}: ${object[value]}`);
        }
    }
    return falsyValues;
}


/************************************** Ejercicio 8 **************************************
Crea una función que convierta un número de bytes en un formato con valores
legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
● Primer parámetro debe ser el número de bytes
● Segundo parámetro debe ser un número especificando la cantidad de
dígitos a los que se debe truncar el resultado (esto se puede hacer
con Number.prototype.toPrecision()). Por defecto, este parámetro debe
de tener un valor de 3.
*/

function fromBytesToFormattedSizeUnits(bytes,decimalPoint=3) {
    bytes = Math.abs(bytes); 
    let k = 1000;
    let dm = decimalPoint;
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
 }

const result1 = fromBytesToFormattedSizeUnits(1000);
console.log(result1); // 1KB
const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2); // 123MB
const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB

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