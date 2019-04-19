# 212. Word Search II

Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example:

Input:

```js
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
// Output: ["eat","oath"]
```

Note:
You may assume that all inputs are consist of lowercase letters a-z.

## 解题

做word search之后推给我的，参考word search，只是在外层加了循环判断；

## 注意

- 把原来的循环分装成函数，要把pathRecord在函数开始的时候重置，保证每次search的时候数据都初始化；

- 题目中并没有明确给出输入两个同样的word，结果要除重，所以输出结果改用`Set()`