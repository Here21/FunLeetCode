# 53. Maximum Subarray

Given an integer array `nums`, find the ***contiguous subarray*** (containing at least one number) which has the largest sum and return its sum.

**Example:**

```js
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

**Follow up:**

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

## 解法

> [什么是动态规划？动态规划的意义是什么？ - 王勐的回答 - 知乎](https://www.zhihu.com/question/23995189/answer/35429905)

动态规划（DP）类题目，此题目是一个一级动态规划题目，要找出一个连续子串之和的最大值，需要先规划一个新的数组`const dp = []`来存放计算的值。

然后`dp[0]`的第一个元素就是`nums[0]`，这样是为了给一个初值。之后去循环`nums`，找出`sum = (dp[i - 1] + nums[i]) > 0 ? (dp[i - 1] + nums[i]) : 0`，也就是需要判断当前个元素与上一次计算的结果的和是否大于0，也就是说当前元素是否为负数。

先复习了一下动态规划的概念，再来分析这道题目。
> 每个阶段的最优状态可以从之前某个阶段的某个或某些状态直接得到而不管之前这个状态是如何得到的 -> 动态规划。

而这道题并不是搜索整个数组的各种连续最长子串，而是直接找到一个连续和的向上子串，也就是符合某个阶段得到得到的最优的状态。