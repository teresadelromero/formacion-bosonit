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