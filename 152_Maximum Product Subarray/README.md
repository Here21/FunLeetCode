# 152. Maximum Product Subarray

Given an integer array `nums`, find the contiguous subarray within an array (containing at least one number) which has the largest product.

**Example 1:**

```js
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```

**Example 2:**

```js
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```

## 解法

题意是找出给定数组中的连续子串乘积的最大值，和之前做过的一道题很像，那道题是加法，这道题是乘法。

乘法需要考虑的问题是**正负**，*负负得正*的乘积可能要比两个正数大，所以判断条件多了一些。

首先需要记录最大值，还需要记录最小值（因为有负值的情况），然后利用最大值和最小值对当前数的乘积来更新最大值和最小值。

举个例子：

```js
/*
input   -2                3                         -2                      4

max     -2(init value)    3 Max(-2*3, -2*3, 3)     12 Max(3*-2, -6*-2, -2)  ···

min     -2(init value)   -6 Min(-2*3, -2*3, 3)     -6 Min(3*-2, -6*-2, -2)  ···

res = (Max(res, max))
res     -2                3                        12                       ···
*/
```

通过上面的例子可以看出，因为是计算乘积，所以再判断大小的时候要考虑正负关系。

每次判断为什么要带上当前数`nums[i]`自己呢？因为题目要求是连续乘积，所以如果前两个的乘积并没有当前数乘积打，就从当前数重新开始取值进行下面的运算。

总体与之前的题型类似。