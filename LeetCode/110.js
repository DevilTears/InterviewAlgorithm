/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if(!root) return true

  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}
var depth = function (root) {
  if(!root) return -1

  return 1 + Math.max(depth(root.left), depth(root.right))
}

// 方法2 自底部向下
var isBalanced = function (root) {
  return balanced(root) !== -1
};

var balanced = function (node) {
  if (!node) return 0

  const left = balanced(node.left)
  const right = balanced(node.right)

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1
  }

  return Math.max(left, right) + 1
}

console.log(isBalanced({
  val: 1,
  left: {
    val: 2,
    left: {
      val:3,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    },
    right: {
      val:3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
}))
