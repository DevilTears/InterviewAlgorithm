/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const result = [[]]

  for (let i = 0; i < nums.length; i++) {
    const len = result.length

    for (let j = 0; j < len; j++) {
      result.push([...result[j], nums[i]])
    }
  }

  return result
};

console.log(subsets([1, 2, 3]))