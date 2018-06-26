/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let num = 0
    J = J.split('')
    S = S.split('')
    for (let i = 0; i < J.length; i++) {
        for (let j = 0; j < S.length; j++) {
            if (S[j] === J[i]) {
                num++
            }
        }
    }
    return num
};