function filterOutOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function filterObjectsByNameLength(obj, length) {
    return obj.filter(obj => obj.name.length > length);
}

function compundFilter(arr) {
    return arr.filter(arr => {
        arr.code > 5
        && !arr.category.contains("special")
        && arr.price > 50
        && arr.location !== "Underground"
    })
}