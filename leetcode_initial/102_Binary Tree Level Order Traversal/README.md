# 102. Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

**For example:**

Given binary tree `[3,9,20,null,null,15,7]`,

```js
    3
   / \
  9  20
    /  \
   15   7
```

return its level order traversal as:

```js
[
  [3],
  [9,20],
  [15,7]
]
```

## 解法

用`Map`把每层的结果保存下来，在递归的时候把值放入对应层数的`Map`对象中，返回使用展开表达式。