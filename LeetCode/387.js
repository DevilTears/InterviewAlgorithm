/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) map.set(s[i], false)
      else map.set(s[i], i)
  }

  for (let [ch, index] of map) {
      if (typeof index === 'number') return index
  }
  return -1
};