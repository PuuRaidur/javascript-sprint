function getValueFromKey(obj, key) {
    if(obj[key] === null) {
        return undefined;
    } else {
        return obj[key]
    }
}

function addKeyValuePairs(obj1, obj2) {
    const obj3 = obj1 + obj2
    return obj3
}