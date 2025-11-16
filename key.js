function getValueFromKey(obj, key) {
    if(obj[key] === null) {
        return undefined;
    } else {
        return obj[key]
    }
}

function addKeyValuePairs(obj, key_value) {
    return Object.entries(...obj, key_value)
}