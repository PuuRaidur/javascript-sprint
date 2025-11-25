function getElementsByTag(tagName) {
    return document.querySelectorAll(tagName);
}

function getElementsByClassName(className) {
    return document.querySelectorAll(`.${className}`);
}

function getElementById(id) {
    return document.getElementById(id) || undefined;
}

function getElementsByAttribute(attrName, attrValue) {
    if (arguments.length === 1) {
        // Match any element that has the attribute, regardless of value
        return document.querySelectorAll(`[${CSS.escape(attrName)}]`);
    } else {
        // Match elements where the attribute equals the given value
        return document.querySelectorAll(`[${CSS.escape(attrName)}="${CSS.escape(attrValue)}"]`);
    }
}