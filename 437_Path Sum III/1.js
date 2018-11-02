/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  let counter = 0;
  const hashMap = {};
  let currentSum = 0;
  return pathSumRecursive(root, currentSum, hashMap, sum);
};

function pathSumRecursive(node, currentSum, hashMap, target) {
  if (!node) {
      return 0;
  }

  const newCurrentSum = currentSum + node.val;
  // Now get the total paths for this target so far
  let totalPaths = hashMap[newCurrentSum - target] || 0;
  
  if (newCurrentSum === target) {
      totalPaths++;
  }
  
  if (hashMap[newCurrentSum]) {
      // If entry is already there, increment
      hashMap[newCurrentSum]++;
  } else {
      hashMap[newCurrentSum] = 1;
  }

  totalPaths += pathSumRecursive(node.left, newCurrentSum, hashMap, target);
  totalPaths += pathSumRecursive(node.right, newCurrentSum, hashMap, target);
  
  hashMap[newCurrentSum]--;
  return totalPaths;
}