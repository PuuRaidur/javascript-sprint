function getValueFromKey(obj, key) {
    if(obj[key] === null) {
        return undefined;
    } else {
        return obj[key]
    }
}

function addKeyValuePairs(obj, key_value) {
    return obj => Object.assign(obj, key_value)
}