# 47. Permutations II

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

**Example:**

```js
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

## 解法

backtracking类型的题，相似的在[这里](https://leetcode.com/problems/permutations/discuss/18239/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partioning))，这类题需要统一做一下加深理解。

**注意运算符优先级。**

下表列出了 JavaScript 运算符，并按优先级顺序从高到低排列。  具有相同优先级的运算符按从左至右的顺序计算。  


| 运算符          |             说明 |
| ------              |             ------ |
| .[ ] ( ) | 字段访问、数组索引、函数调用和表达式分组|
| ++ -- - ~ ! delete new typeof void | 一元运算符、返回数据类型、对象创建、未定义的值 |
| * / % | 相乘、相除、求余数 |
| + - + | 相加、相减、字符串串联 |
| << >> >>> | 移位 |
| < <= > >= instanceof | 小于、小于或等于、大于、大于或等于、是否为特定类的实例 |
| == != === !== | 相等、不相等、全等，不全等 |
| & | 按位“与” |
| ^ | 按位“异或” |
| \| | 按位“或” |
| && | 逻辑“与” |
| \|\| | 逻辑“或” |
| ?: | 条件运算 |
| = OP= | 赋值、赋值运算（如 += 和 &=）|
| , | 多个计算 |