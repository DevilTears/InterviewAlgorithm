/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = x.toString().split('')
  let a = str.join('')
  let b = str.reverse().join('')
  if (a === b) {
      return true
  }
  return false
};