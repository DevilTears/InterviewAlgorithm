/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, min = prices[0]

    for (let p of prices) {
        min = Math.min(min, p)
        max = Math.max(max, p - min)
    }

    return max
};