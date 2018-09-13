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
var maxDepth = function(root) {
  let maxDepth = 0;
  helper(root, 1);
  return maxDepth;
  function helper(root, depth) {
    if(root === null) return;
    maxDepth = Math.max(depth, maxDepth);
    helper(root.left, depth + 1);
    helper(root.right, depth + 1);
  }
};

const tree = {
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
      left: {
        val: 3,
        left: null,
        right: {
          val: 9,
          left: null,
          right: null
        }
      },
      right: {
        val: 5,
        left: null,
        right: null
      }
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    },
  },
}

console.log(maxDepth(tree));