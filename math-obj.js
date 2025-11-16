const mathObj = {
    abs: function abs(a) {
        Math.abs(a)
    },
    isEven: function isEven(a) {
        if(a % 2 === 0) {
            return true
        }
        return false
    },
    isOdd: function isOdd(a) {
        if(a % 2 === 0) {
            return false
        }
        return true
    },
    isStrictlyPositive: function isStrictlyPositive(a) {
        if(a > 0){
            return true
        }
        return false
    },
    min: function min(a, b) {
        if(a < b){
            return a
        }
        if(a === b){
            return null
        }
        return b
    },
    max: function max(a, b) {
        if(a < b){
            return b
        }
        if(a === b){
            return null
        }
        return a
    }
}