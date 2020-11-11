/*
Hay N estaciones de gas en una ruta circular. Donde el gas disponible en cada estacion i equivale a arr[i].
Tenes un auto con capacidad de tanque ilimitada y cuesta costs[i] de gas viajar de la estacion i a i + 1.
Al principio del viaje el tanque esta vacio en una de las estaciones de gas.
Devolver el índice mínimo de la gasolinera inicial si necesitas recorrer el circuito una vez; de lo contrario, devuelve -1.
*/


/*
Notas:
1) Si de A a B, no me alcanza el gas para poder llegar. Entonces cualquier estacion entre A y B no puede llegar a B.
2) Si el numero total de gas es mayor al costo, entonces debe haber una solucion.
*/

function GasStationProblem(arr, costs) {
    let start = 0;
    let tank = 0;
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        tank = tank + arr[i] - costs[i];
        if (tank < 0) { // Significando que no puede llegar a la siguiente estacion.
            start = i + 1;
            total = tank + total;
            tank = 0; //Vacio el tanque para poder iniciar recorrido en un nuevo indice
        }
    }
    if (tank + total >= 0) // Si el numero total del tank de gas es mayor al costo, entonces hay solucion.
        return start;
    else return -1;
}

/* 
Complejidad Temporal: O(N)
Complejidad Espacial: O(1) 
*/
const arr = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

console.log(GasStationProblem(arr, cost)); // Returns 3.