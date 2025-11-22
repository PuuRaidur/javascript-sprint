function convert2DArrayToObjectArray(array2D) {
    return array2D.map(([key, value]) => ({ key, value }));
}

function convertArrayOfObjectsToStrings(objArray) {
    return objArray.map(({ key, value }) => `${key}:${value}`);
}

function concatenateStrings(strArray, maxLength) {
    return strArray.map(str => str.length > maxLength ? str.slice(0, maxLength) + '...' : str);
}