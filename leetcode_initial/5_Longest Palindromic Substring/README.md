# 5. Longest Palindromic Substring

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

```js
Input: "babad"
Output: "bab"
```

Note: "aba" is also a valid answer.
Example 2:

```js
Input: "cbbd"
Output: "bb"
```

## 解题

首先要理解什么是"Palindromic Substring"，就是有**轴对称**的字符串。但是这里有个坑，"aba"是回文子串，那么"a"、"b"、"c"呢？其实都算"Palindromic Substring"，他们的轴是自己。

提交答案的时候，测试不通过，测试给出的string是"abdacd"，乍一看我没觉得有回文子串，后面发现是自己对回文子串的理解有问题，也就是上文说到的“坑”。

### 解法一

暴力解：重复所有可能的回文子串，然后找出最长的。

## 注意

- 回文串分奇偶， "aba" 是奇回文子串， "aa" 是偶回文子串。

- 如果遇到`s.length < 2`可以直接`if`后输出，减少不必要的运算量。