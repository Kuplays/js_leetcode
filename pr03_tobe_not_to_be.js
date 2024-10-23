//https://leetcode.com/problems/to-be-or-not-to-be/

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let result = {
        toBe: function(valOther) {
            if (val !== valOther) {
                throw new Error("Not Equal")
            }
            return true
        },
        notToBe: function(valOther) {
            if (val === valOther) {
                throw new Error("Equal")
            }
            return true
        }
    }
    return result
};


console.log(expect(5).toBe(5)) // true
console.log(expect(5).notToBe(3)) // throws "Equal"
