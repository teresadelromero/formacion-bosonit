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