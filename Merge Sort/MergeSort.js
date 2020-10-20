const merge = (arr, l, m, r) => {
    const sizeHalfOne = m - l + 1;
    const sizeHalfTwo = r - m; 

    const arr1 = new Array(sizeHalfOne);
    const arr2 = new Array(sizeHalfTwo);

    initializeTempArr(arr1, arr2, arr, l, m);

    let i = 0; let j=0;
    let k = l; //Inicializo el index inicial a mergear

    while(i < sizeHalfOne && j < sizeHalfTwo){
        if(arr1[i] <= arr2[j]){
            arr[k] = arr1[i];
            i++;
        } else {
            arr[k] = arr2[j];
            j++;
        }
    }
    while (i < sizeHalfOne) 
        { 
            arr[k] = arr1[i]; 
            i++; 
            k++; 
        }
    while (j < sizeHalfTwo) 
        { 
            arr[k] = arr2[j]; 
            j++; 
            k++; 
        } 

}

function initializeTempArr(arr1, arr2, arr, l, m) {
    for(let i=0; i < arr1.length; i++){
        arr1[i] = arr[l +i];
    }
    for(let j=0; j < arr2.length; j++){
        arr2[j] = arr[m + 1 +j];
    }

}
const mergeSort = (arr, l, r) => {

    if(l < r) {
        const m = (l + r)/2;
        mergeSort(arr,l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }

};
const arr = [4, 1];

mergeSort(arr, 0, 2);