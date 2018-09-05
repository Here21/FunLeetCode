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

![Binary Tree Iterative](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiiqNWRjaTdAhVQnOAKHclyAUQQjRx6BAgBEAU&url=https%3A%2F%2Fjavarevisited.blogspot.com%2F2016%2F07%2Fbinary-tree-preorder-traversal-in-java-using-recursion-iteration-example.html&psig=AOvVaw3zUAtHTpNQCPGsuFYr9O5S&ust=1536245068746132)

![Binary Tree Iterative](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwic0cvgjaTdAhUNJt8KHRrJCJEQjRx6BAgBEAU&url=http%3A%2F%2Flib.csdn.net%2Farticle%2Fdatastructure%2F21948&psig=AOvVaw2j2exOZPzPt1pc-bqh2JHV&ust=1536245182782259)

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