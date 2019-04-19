/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
  return helper(root);
  function helper(root) {
    if(root === null) return root;
    const left = helper(root.left);
    const right = helper(root.right)
    root.left = right;
    root.right = left;
    return root;
  }
};