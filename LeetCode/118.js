/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    let temp = []
    for (let i = 0; i < numRows; i++) {
        if (i === 0) { result[i] = [1]}
        else if (i === 1) { result[i] = [1, 1]}
        else {
            temp = []
            for (let j = 0; j <= result[i - 1].length; j++) {
                if (j === 0 || j === result[i - 1].length) {
                    temp[j] = 1
                } else {
                    temp[j] = result[i - 1][j - 1] + result[i - 1][j] 
                }
            }
            result[i] = temp
        }
    }
    return result
};