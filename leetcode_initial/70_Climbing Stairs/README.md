# 70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

**Example 1:**

```js
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**

```js
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

## 解法一（DP）

这个问题是一个典型的[斐波拉契数列](https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97)问题。也就是求`f[n] = f[n-1] + f[n-2]`的解。

![Fibonacci number](https://upload.wikimedia.org/wikipedia/commons/d/db/34%2A21-FibonacciBlocks.png)

先确定最小的台阶`f[2] = f[1] + f[0]`中`f[1] f[0]`的值，也就是当`n = 1`时只有一种解法，当`n = 0`时也只有一种解法。

## 解法二（Backtracking）

递归解法，需要打断点去看具体的运作方式。解法相当于是`f[n] = f[n-1] + f[n-2]`的逆过程。

```js
f[n - 1] = f[n - 2] + f[n - 3];
f[n - 2] = f[n - 3] + f[n - 4];
...
...
return f[3] = f[2] + f[1];
```