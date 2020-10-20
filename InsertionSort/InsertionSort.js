function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > elem) {
            arr[j + 1] = arr[j];
            j--;                            // En este while desplazo elementos a la derecha hasta encontrar la posicion correcta de elem. 
        }                                   // Afuera del while realizo la asignacion. 
        arr[j + 1] = elem;
    }
    return arr;
}

/* const result = insertionSort([3, 2, 1]);
console.log(result); // Should print [1, 2, 3]; */

const newResult = insertionSort([8, 2, 5, 4, 7, 6, 1]);
console.log(newResult); // Should print 1, 2, 4, 5, 6, 7 , 8; 