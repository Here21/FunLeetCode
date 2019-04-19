/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];
  const stack = [];
  let node = root;
  while(node || stack.length > 0) {
    // 循环左边界入栈
    while(node) {
      stack.push(node);
      node = node.left;
    }
    // 到达左边界，出栈，节点值放入结果集，从边界处开始找右值
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }
  return result;
};

const root = {
val: 1,
left: null,
right: {
  val: 2,
  left: {
    val: 3,
    left: null,
    right: null
  },
  right: null
}
}

console.log(inorderTraversal(root));