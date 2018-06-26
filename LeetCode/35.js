/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var getIndex = function (arr, item) {
  return arr.indexOf(item)
}
var searchInsert = function(nums, target) {
  let index = getIndex(nums, target)
  if (index !== -1) {
    return index
  }
  nums.push(target)
  nums.sort((a, b) => {
    return a - b
  })
  return getIndex(nums, target)
};