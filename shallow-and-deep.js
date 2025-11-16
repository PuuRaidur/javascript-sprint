const shallowCopy = Array.prototype.concat(original);
const deepCopy = JSON.parse(JSON.stringify(original));