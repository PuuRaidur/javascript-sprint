function getElementsByTag(tagName) {
    return document.getElementsByTagName(tagName);
}

function getElementsByClassName(className) {
    return document.getElementsByClassName(className);
}

function getElementById(id) {
    return document.getElementById(id) || undefined;
}

function getElementsByAttribute(attrName, attrValue) {
    if (attrValue === undefined) {
        // Match elements that have the attribute (regardless of value)
        return document.querySelectorAll(`[${CSS.escape(attrName)}]`);
    } else {
        // Match elements with the specific attribute=value
        return document.querySelectorAll(`[${CSS.escape(attrName)}="${CSS.escape(attrValue)}"]`);
    }
}