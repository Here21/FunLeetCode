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
    const arr = [];
    if(root === null) {
      return arr;
    }
    helper(root);
    return arr;
    function helper(root) {
      if(root === null) return;
      helper(root.left);
      arr.push(root.val);
      helper(root.right);
    }
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