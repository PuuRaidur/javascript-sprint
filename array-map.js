function convert2DArrayToObjectArray(array2D) {
    return array2D.map(([key, value]) => ({ [key]: value }));
}

function convertArrayOfObjectsToStrings(objArray) {
    return objArray.map(person => "Name: " + person.name + ", Age: " + person.age + ", City: " + person.city);
}

function concatenateStrings(strArray, maxLength) {
    return strArray.map(str => str.length > maxLength ? str.slice(0, maxLength) + '...' : str);
}

const data = [
    ["name", "Alice"],
    ["age", 30],
    ["city", "New York"],
];
console.log(convert2DArrayToObjectArray(data))

const objects = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "Los Angeles" },
]
console.log(convertArrayOfObjectsToStrings(objects))

const strings = ["apple", "banana", "kiwi", "orange", "pineapple"];
console.log(concatenateStrings(strings, 5))