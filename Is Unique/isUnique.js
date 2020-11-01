/* Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?  */
function isUnique(str) {
    const arr = new Array(256);
    for (let i = 0; i < str.length; i++) {
        if (arr[str.charCodeAt(i)] === undefined)
            arr[str.charCodeAt(i)] = true; //Ya que hay 256 caracteres, si hay algun caracter con true significa q no tiene caracteres unicos
        else
            return false;
    }
    return true;
}