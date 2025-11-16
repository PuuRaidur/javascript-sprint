function getFirstElement(data) {
    if(data === null || data === "") {
        return undefined;
    } else {
        return data[0];
    }
}

function getLastElement(data) {
    if(data === null || data === "") {
        return undefined;
    } else {
        return data[data.length - 1];
    }
}

function getElementByIndex(data, index) {
    if(data === null || data === "") {
        return undefined;
    } else {
        return data[index];
    }
}