function getTotalFromShoppingBasket(objArray){
    return objArray.reduce((accum, curr) => accum + curr.price, 0);
}

function getAverageAge(objArray){
    if(objArray.length === 0) return 0;
    const totalAge = objArray.reduce((accum, curr) => accum + curr.age, 0);
    return totalAge / objArray.length;
}

function concatenateObjects(objArray){
    return objArray.reduce((accumulator, currentItem) => {
        const { key, value } = currentItem;
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(value);
        return accumulator;
    }, {});
}