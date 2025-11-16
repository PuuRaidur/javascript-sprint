function getValueFromKey(obj, key) {
    if(obj[key] === null) {
        return undefined;
    } else {
        return obj[key]
    }
}

function addKeyValuePairs(obj, key_value) {
    Object.assign(obj, key_value);
    return obj;
}

const location = {
    city: 'Tallinn',
    country: 'Estonia',
}


console.log(getValueFromKey(location, 'city'))
console.log(getValueFromKey(location, 'continent'))
console.log(addKeyValuePairs(location, { airports: ['TLL']}))
console.log(addKeyValuePairs(location, { highestElevation: 64 }))