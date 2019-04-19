# 114. Flatten Binary Tree to Linked List

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

```js
/*
    1
   / \
  2   5
 / \   \
3   4   6
*/
```

The flattened tree should look like:

```js
/*
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
*/
```

## 解法

题目的要求是把原链表按前序遍历的方式铺平。按照深度优先可以从最后一个元素开始排，先遍历最右边的分支，然后把左边置为`null`。打断点会很快理解。