// 基础的二叉树
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    right: {
      val: 'F'
    }
  }
}

// 所有遍历函数的入参都是树的根结点对象
// 先序遍历函数
function preOrder(root) {
  // 递归边界，root 为空
  if(!root) {
    return
  }

  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)
  // 递归遍历左子树
  rootMap(root.left)
  // 递归遍历右子树
  rootMap(root.right)
}

// 中序遍历
function inOrder(root) {
  // 递归边界，root 为空
  if(!root) {
    return
  }

  // 递归遍历左子树
  rootMap(root.left)
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)
  // 递归遍历右子树
  rootMap(root.right)
}

// 后序遍历
function postOrder(root) {
  // 递归边界，root 为空
  if(!root) {
    return
  }

  // 递归遍历左子树
  rootMap(root.left)
  // 递归遍历右子树
  rootMap(root.right)
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)
}
