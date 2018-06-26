/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var count = 0;
    var n = x ^ y;
    while (n) {
        ++count;
        n = (n - 1) & n;
    }
    return count;
};