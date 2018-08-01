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

这道题涉及两个优先搜索算法：

[DFS（深度优先算法）](https://blog.csdn.net/raphealguo/article/details/7560918)

[BFS（广度优先算法）](https://blog.csdn.net/raphealguo/article/details/7523411)

### DFS 解题思路

```js
const input = '23'
/*
*
*
*
*
*                        2
*
*         (a)           (b)          (c)
*          3             3            3
*
*   (d)  (e)  (f)       ...          ...
*    ↓    ↓    ↓
*   [ad] [ae] [af]      ...          ...
*
*/
```

首先分析一下DFS的解题思路：
深度优先，就是在一条路上走到底，然后不断往上层递归循环。如上图所示

## BFS 解题思路

```js
const input = '23'
/*
*
* [a, b, c] * [d, e, f]
*
* [ad, bd, cd, ae, be, ce, cd, ce, cf]
*/
```

而广度优先从逻辑上比较好理解，就是找到所有的输入对应的子串，然后做笛卡尔积。

这道题没有什么限制条件，所以时间复杂度差不多，但是BFS的空间复杂度稍微大一些，因为内部有一个重复声明的数组。