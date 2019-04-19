/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

var isSubtree = function(s, t) {
  if(s === null && t !== null) return false;
  if(isSame(s, t)) {
    return true;
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t);

  function isSame(s, t) {
    // 边界条件
    if(s === null && t === null) return true;
    if(s === null || t === null) return false;

    if(s.val === t.val) {
      return isSame(s.left, t.left) && isSame(s.right, t.right);
    };
    return false;
  }
};

const s = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: null
    }
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
}

const t = {
  val: 3,
  left: {
    val: 5,
    left: null,
    right: null
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}

console.log(isSubtree(s, t));