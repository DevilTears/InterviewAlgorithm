/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER

  const dfs = (root) => {
    if (root == null) return 0

    const left = Math.max(0, dfs(root.left))
    const right = Math.max(0, dfs(root.right))

    maxSum = Math.max(maxSum, left + root.val + right)

    return root.val + Math.max(left, right)
  }

  dfs(root)

  return maxSum
};

console.log(maxPathSum({
  val: -10,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}))
