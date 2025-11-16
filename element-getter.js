function getFirstElement(data) {
    if(data === null || data == "") {
        return undefined;
    } else {
        return data[0];
    }
}

function getLastElement(data) {
    if(data === null || data == "") {
        return undefined;
    } else {
        return data[Object.lastIndexOf(data)];
    }
}

function getElementByIndex(data, index) {
    if(data === null || data == "") {
        return undefined;
    } else {
        return data[index];
    }
}