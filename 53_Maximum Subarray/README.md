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

动态规划（DP）类题目，此题目是一个一级动态规划题目，要找出一个连续子串之和的最大值，需要先规划一个新的数组`const dp = []`来存放计算的值。

然后`dp[0]`的第一个元素就是`nums[0]`，这样是为了给一个初值。之后去循环`nums`，找出`sum = (dp[i - 1] + nums[i]) > 0 ? (dp[i - 1] + nums[i]) : 0`，也就是需要判断当前个元素与上一次计算的结果的和是否大于0，也就是说当前元素是否为负数