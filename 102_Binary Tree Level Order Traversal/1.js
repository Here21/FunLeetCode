/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // map的键不仅仅是字符串类型
  const result = new Map();
  helper(root, 0);
  // 只返回values的值
  return [...result.values()];
  function helper(root, level) {
    if(root === null) return;
    // 新的一层需要新的空间
    if(level >= result.size) {
      result.set(level, []);
    };
    result.get(level).push(root.val);
    helper(root.left, level + 1);
    helper(root.right, level + 1);
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
      left: null,
      right: null
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

console.log(levelOrder(tree));
