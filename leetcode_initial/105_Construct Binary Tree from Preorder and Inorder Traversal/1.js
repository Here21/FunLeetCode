/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function(preorder, inorder) {

  return helper(0, 0, preorder.length - 1, preorder, inorder);
  function helper(preStart, inStart, inEnd, preorder, inorder) {
    if(preStart > preorder.length - 1 || inStart > inEnd) {
      return null;
    }
    const treeNode = new TreeNode(preorder[preStart]);
    let i = inStart;
    while(i <= inEnd) {
      if(inorder[i] === preorder[preStart]) break;
      i++;
    }
    treeNode.left = helper(preStart + 1, inStart, i - 1, preorder, inorder);
    treeNode.right = helper(preStart + (i - inStart + 1), i+1, inEnd, preorder, inorder);
    return treeNode;
  }
};

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];

console.log(buildTree(preorder, inorder));


// let buildTree = (preorder, inorder) => {
//   let p = 0
//   let i = 0
//   let build = (stop) => {
//       if (inorder[i] != stop) {
//           let root = new TreeNode(preorder[p++])
//           root.left = build(root.val)
//           i++
//           root.right = build(stop)
//           return root
//       }
//       return null
//   }
//   return build()
// };
