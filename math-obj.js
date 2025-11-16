const mathObj = {
    abs: function abs(a) {
        return Math.abs(a)
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
        return b
    },
    max: function max(a, b) {
        if(a < b){
            return b
        }
        return a
    }
}