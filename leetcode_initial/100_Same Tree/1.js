/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return helper(p, q);

  function helper(root1, root2) {
    if(root1 === null && root2 === null) return true;
    if(root1 !== null && root2 === null) return false;
    if(root1 === null && root2 !== null) return false;
    if(root1.val !== root2.val) return false;
    return helper(root1.left, root2.left) && helper(root1.right, root2.right);
  };
};

const tree1 = {
  val: 3,
  left: {
    val: 0,
    left: null,
    right: null
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
}

const tree2 = {
  val: 3,
  left: {
    val: 0,
    left: null,
    right: {
      val: 2,
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

console.log(isSameTree(tree1, tree2));