function sumNestedArray(array) {
    array = array.flat(Infinity)
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === "number") {
            sum += array[i]
        }
    }
    return sum
}