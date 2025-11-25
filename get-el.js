function getElementByTag(tagName) {
    return document.querySelectorAll(tagName);
}

function getElementsByClassName(className) {
    return document.getElementsByClassName(className);
}

function getElementById(id) {
    return document.getElementById(id) || undefined;
}

function getElementByAttribute(attrName, attrValue) {
    if (attrValue) {
        return document.querySelectorAll(`[${attrName}="${attrValue}"]`);
    } else {
        return document.querySelectorAll(`[${attrName}]`);
    }
}