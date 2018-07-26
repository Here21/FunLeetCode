# 15. 3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

**Example:**

```js
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## 解题

刚看到这个题，整体思路就是暴力循环，找出所有的可能性，然后出重。

整体思路实现发现会遇到超时问题**Time Limit Exceeded**，大概还剩10个case的时候报的。有待优化。