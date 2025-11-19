function filterOutOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function filterObjectsByNameLength(arr, length) {
    return arr.filter(obj => obj.name.length < length);
}

function compoundFilter(arr) {
    return arr.filter(item =>
        item.code.length > 5 &&
        !item.category.includes("special") &&
        item.price > 50 &&
        item.location !== "Underground"
    )
}