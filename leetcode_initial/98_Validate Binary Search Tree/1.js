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
var isValidBST = function(root) {
  return backtracking(root, null, null);

  function backtracking(root, min, max) {
    if(root === null) return true;
    if(min !== null && root.val <= min) return false;
    if(max !== null && root.val >= max) return false;
    return backtracking(root.left, min, root.val) && backtracking(root.right, root.val, max);
  }
};

const tree = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null
    },
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
}

console.log(isValidBST(tree));
