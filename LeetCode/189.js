/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k == 0) {
        return
    }
    for (let i = 0; i < k; i++) {
        let a = nums.pop()
        nums.unshift(a)
    }
};