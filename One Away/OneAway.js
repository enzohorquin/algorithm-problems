/* One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false  */

function oneAway(str1, str2) {
    const lengthDif = str1.length > str2.length ? str1.length - str2.length : str2.length - str1.length;
    if (str1 === str2) return true;
    if (lengthDif < -1 || lengthDif > 1) return false;

    if (lengthDif === 0)
        return doReplace(str1, str2);
    else if (lengthDif === 1)
        return doRemove(str1, str2);

    return false;
}

function doReplace(str1, str2) {
    let i = 0;
    const stringToReplace = str1.length > str2.length ? str2 : str1;
    const stringToCompare = str1.length > str2.length ? str1 : str2;
    while (stringToReplace[i] === stringToCompare[i]) i++;
    const newString = stringToReplace.substring(0, i) + stringToCompare[i] + stringToReplace.substring(i + 1);  //Hago efectivo el replace.
    return newString === stringToCompare;
}

function doRemove(str1, str2) {
    let i = 0;
    const stringToRemove = str1.length > str2.length ? str1 : str2;
    const stringToCompare = str1.length > str2.length ? str2 : str1;
    while (i < stringToRemove.length) {
        const removedStrAtIndex = stringToRemove.substring(0, i) + stringToRemove.substring(i + 1); // Elimino para comparar si son iguales.
        if (removedStrAtIndex === stringToCompare)
            return true;
        else i++;
    }
    return false;
}

console.log(oneAway('pales', 'pale'));

