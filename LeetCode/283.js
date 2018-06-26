/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            i--
            n++
        }
    }
    for (let j = 0; j < n; j++) {
        nums.push(0)
    }
};