function convert2DArrayToObjectArray(array2D) {
    return array2D.map(([key, value]) => ({ [key]: value }));
}

function convertArrayOfObjectsToStrings(objArray) {
    return objArray.map(obj => {
        return Object.keys(obj).map(key => `${key}: ${obj[key]}`).join(", ");
    });
}

function concatenateStrings(strArray, maxLength) {
    return strArray.map(str => str.length > maxLength ? str.slice(0, maxLength) + '...' : str);
}