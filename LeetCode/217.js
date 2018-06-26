/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length === 1) {return false}
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i]
        nums.splice(i, 1)
        if (nums.indexOf(temp) !== -1) {
            return true
        }
        i--
    }
    return false
};