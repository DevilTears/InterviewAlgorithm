/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let total = {}
    for (let i = 0; i < moves.length; i++) {
        total[moves[i]] = (total[moves[i]] + 1) || 1
    }
    return(total['L'] === total['R'] && total['U'] === total['D'])
};