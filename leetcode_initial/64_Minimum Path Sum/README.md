# 64. Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

**Example:**

```js
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```

## 解法

这道题很类似**62. Unique Paths**，基本就是一样的题。

看Discuss才知道这类题是`DP`（动态规划）类型的题目，一直当成是`Array`类型，应该是对动态规划的不理解。需要统一刷个`DP`问题集合来帮助理解一下。