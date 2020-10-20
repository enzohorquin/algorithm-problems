/* String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). */

function stringCompression(str) {
    let i = 0;
    let result = '';
    let count = 0;
    let prev = str[i];
    while (i < str.length) {
        current = str[i];
        if (prev === current) {
            count++;
        } else {
            result = result + prev + count;
            prev = current;
            count = 1;
        }
        i++;
    }

    result = result + prev + count; //Tengo que agregar resultado de la ultima iteracion, sino no se almacena al salir del while.

    return result.length < str.length ? result : str;
}

console.log(stringCompression(''));