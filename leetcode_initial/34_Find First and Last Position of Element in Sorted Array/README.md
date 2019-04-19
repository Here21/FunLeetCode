# 34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in ascending order, find the ***starting and ending position*** of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

**Example 1:**

```js
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```js
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

## 解题

审题不严导致开始做题前我一直以为要找到一个全部的target位置，不过还好偏的不严重，整体思路差不多。

### 二分搜索

二分法去解决这个问题，我的思路是先找到最左`target`，然后从这个位置开始向右一步步走，直到走到尽头。这个思路也是一开始审题不严导致的。

```js
/*
nums = [5,7,7,8,8,10]  target = 8

    5   7   7   8   8   10
    ↑       ↑           ↑
    s       m           e

    5   7   7   8   8   10
                ↑   ↑    ↑
                s   m    e

    5   7   7   8   8   10
                ↑   ↑
               s,m  e

    5   7   7   8   8   10
                ↑
                m

    5   7   7   8   8   10
                    ↑
                    m
*/
result = [3, 4]
```

解题有点类似解法二线性搜索的方式，先找到左端点然后顺着找到右端点。

## 线性搜索

线性搜索就很直观而且很简洁，从逻辑上也更好理解，先从头找到最左端点，如果找不到直接返回`[-1, -1]`，找到了再从右边开始找最右端点。

但是时间复杂度是`O(n)`，题目中要求是`O(log n)`，有点不符。