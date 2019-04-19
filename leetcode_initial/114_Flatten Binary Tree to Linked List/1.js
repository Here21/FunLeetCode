/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let prev = null;
  helper(root);

  function helper(root) {
    if(root === null) return;
    helper(root.right);
    helper(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
  }
};


const head = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
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
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
}
flatten(head);
console.log(head);
