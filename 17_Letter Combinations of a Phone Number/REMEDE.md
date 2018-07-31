# 17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

**Example:**

```js
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**Note:**

Although the above answer is in lexicographical order, your answer could be in any order you want.

## 解题

这道题涉及两个有限算法：[DFS（深度优先算法）](https://blog.csdn.net/raphealguo/article/details/7560918)、[BFS（广度优先算法）](https://blog.csdn.net/raphealguo/article/details/7523411)