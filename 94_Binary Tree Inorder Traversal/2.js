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
    while(node) {
      stack.push(node);
      node = node.left;
    }
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