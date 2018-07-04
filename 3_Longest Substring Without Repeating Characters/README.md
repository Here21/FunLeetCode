# 3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

# 解题
看到这个题，第一时间想到的是利用两个游标来遍历其中的substring，这样的好处是从逻辑上很清晰，而且符合题目，只要找到最长子串的长度就好。我在做这道题，想把所有参与比较的substring都打印出来，也非常简单。利用两个游标的index值，就可以顺便把所有参与比较的substring找到。

> String.prototype.slice()
The slice() method extracts a section of a string and returns it as a new string, ***without modifying the original string***.
