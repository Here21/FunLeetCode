# 136. Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

## 解法

[按位异或运算符 (^)](https://msdn.microsoft.com/zh-cn/library/ece515h6(v=vs.94).aspx)

```js
0101   (expression1)
1100   (expression2)
----
1001   (result)
```