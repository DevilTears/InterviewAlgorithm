/**
 * @param {string[]} words
 * @return {string[]}
 */
function check (word) {
    let str1 = 'qwertyuiop'
    let str2 = 'asdfghjkl'
    let str3 = 'zxcvbnm'
    let arr1 = []
    let arr2 = []
    let arr3 = []
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (str1.indexOf(word[i]) !== -1 && arr2.length === 0 && arr3.length === 0) {
            arr1.push(word[i])
        } else if (str2.indexOf(word[i]) !== -1 && arr1.length === 0 && arr3.length === 0) {
            arr2.push(word[i])
        } else if (str3.indexOf(word[i]) !== -1 && arr1.length === 0 && arr2.length === 0) {
            arr3.push(word[i])
        } else {
            return false
        }
    }
    return true
}
var findWords = function(words) {
    return words.filter(check)
};