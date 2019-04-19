# 198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and **it will automatically contact the police if two adjacent houses were broken into on the same night.**

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight **without alerting the police.**

**Example 1:**

```js
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
```

**Example 2:**

```js
Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
```

## 解法

看题目意思是，不能抢劫连续的两家，别的方式怎么抢都成，求最大抢劫金额的方案。很典型的动态规划题。

动态规划最大的特点就是需要**记住求过的解来节省时间**，所以我们需要根据规则来记录不同的解。

比方我们规划“先抢第一家和先抢第二家两条线路”，那么也就是说我们需要记录两个值，然后每次取值的时候，在两个值中取较大的那个。因为我们最终的目的是找到抢钱最多的方案，所以只取最大即可。

根据规则，两条线路不能重合，所以`A`只记录单数路线的点，`B`只记录双数路线的点，如下所示：

```js
/*
开始规划路线
input:     1      2      2     1
    A:     ↑
    B:            ↑

路线选择
input:     1      2      2     1
    A:     ↑         max(1+2, B)
    B:            ↑          max(2+1, A)

最终选择
return max(A, B);
*/
```