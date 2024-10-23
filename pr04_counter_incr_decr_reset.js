//https://leetcode.com/problems/counter-ii

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init
    let result = {
        increment: function() {
            return ++counter
        },
        decrement: function() {
            return --counter
        },
        reset: function() {
            counter = init
            return counter
        }
    }
    return result
};


const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.increment()) // 7
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4