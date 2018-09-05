# 94. Binary Tree Inorder Traversal

Given a binary tree, return the inorder traversal of its nodes' values.

**Example:**

```js
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
```

**Follow up:** Recursive solution is trivial, could you do it iteratively?

## 解法

这道题是二叉树**中序遍历**（inorder traversal），即 **左->根->右** 遍历顺序。

用backtracking的方式来做就很简单：

```js
// left root
helper(root.left);
// middle value
arr.push(root.val);
// right root
helper(root.right);
```