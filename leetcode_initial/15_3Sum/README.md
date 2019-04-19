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

整体思路实现发现会遇到超时问题**Time Limit Exceeded**，大概还剩10个case的时候报的。有待优化。**已作废**

参考了discuss中的文章，发现了一个很棒的思路。[Concise O(N^2) Java solution](https://leetcode.com/problems/3sum/discuss/7380/Concise-O(N2)-Java-solution)，该解决方案不仅大大降低了时间复杂度，而且极大加快了运算效率。（对比我自己刚开始的解法，真的是毛驴跟火箭的差别）

这个老哥的整体思路也是循环，不过他的想法是，最左游标作为基游标，每次最左基游标移动，都会重新开启新循环来循环剩下两个浮动游标。

而中间两个浮动游标的思路有点类似**Container With Most Water**的设计，由两端向中间进行。同时还要比较下一个点进行除重。细节都在[代码里](./2.js)。