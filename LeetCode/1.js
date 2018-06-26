/**
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9所以返回 [0, 1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target == nums[i] + nums[j] ) {
        let arr = []
        arr.push(i)
        arr.push(j)
        return arr
      }
    }
  }
};
