# 55. Jump Game

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

**Example 1:**

```js
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```js
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```

## 解法

> 每个阶段的最优状态都是由上一个阶段的最优状态得到的->贪心；

每次跳跃的最远距离都依赖上一次的最优解，所以可以看到这道题要用贪心算法解决。

> 贪心法，又称贪心算法、贪婪算法、或称贪婪法，是一种在每一步选择中都采取在**当前状态下**最好或最优（即最有利）的选择，从而希望导致结果是最好或最优的算法。

对于这道题，并不需要记录每次跳跃的步数，但是需要找到跳跃的最大值，也就是说需要当前行进中的最大步进值。比如：

```js
Input: [2,3,1,1,4]
let i = 0;

i      : 0  1  2  3  4  end
maxStep: 2  3  3  3  4  end

return true;
```

这里最大步进值（最远跳跃距离）可以跳到`nums`跳到末尾，来看另一个例子：

```js
Input: [3,2,1,0,4]
let i = 0;

i      : 0  1  2  3  4  end
maxStep: 3  3  3  3  end

return true;

```

这个`nums`能走到的最远距离是`i = 3`时，但是`nums[3] = 0`，也就是说走到这以后，再也无法走到下一步，因为`nums[3] = 0`没有下一步的距离，所以这个跳跃结束，结果`return false;`

贪心和动态规划是解决问题的方式不同，不同在于是否需要**直接依赖之前所有阶段的状态组合结果**。

具体看一下这里[什么是动态规划？动态规划的意义是什么？ - 王勐的回答 - 知乎](https://www.zhihu.com/question/23995189/answer/35429905)
