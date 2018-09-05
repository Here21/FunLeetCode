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

![Binary Tree Iterative](https://1.bp.blogspot.com/-bn3KHYB2BYk/V4OfyZQUnNI/AAAAAAAAGng/T_EEc1IOXEoOdVvFQpCEr-LXAKqyu8F5wCLcB/s400/binary%2Btree%2BPreOrder%2Btraversal%2Bin%2BJava%2B.png)

![Binary Tree Iterative 2](http://img.blog.csdn.net/20160531113110952)

### Backtracking

用backtracking的方式来做就很简单：

```js
// left root
helper(root.left);
// middle value
arr.push(root.val);
// right root
helper(root.right);
```

### Iterative

**重点方法：**利用栈，进栈出栈来记录循环左边界，去代码中打断点可以很快理解。