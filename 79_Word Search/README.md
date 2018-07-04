# 3. Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

```js
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
```

# 解题
矩阵题，第一眼看上去没什么思路，直接参考的Discuss中别人的[solution](https://leetcode.com/problems/word-search/discuss/27811/My-Java-solution)。
整篇看完发现并不是特别难，目前阶段我也不考虑复杂度问题，先解决问题再优化。

参考的这篇solution中的做法，是先去遍历board矩阵，找到word中的首字母，然后通过search这个首字母的四个方向，看看是否能完整找到整个word。

重点来看一下是如何进行search的：
这个solution在search的时候，先要有个index去充当word的记录游标。根据游标反馈的word中的字母，然后根据当前所在矩阵的位置去查该位置四个方向的下一个word字母。如果查到，接着从这个位置去查四个方向是否有下一个word字母。（**注意：题目中word必须连续而且可以存在直角拐弯，但是不能重复**）不断递归search，直到四个方向都查不到下一个word字母并且word字母的游标index没有走到头，会返回false，外层继续找矩阵下一个首字母存在的位置并且开始新一轮的search 递归查找。

由于不能重复走检索到的字母的路径，所以在search的时候，还需要记录已经走过的坐标位置，避免重复。

当word中的游标走到头的时候，直接输出即可，能走到头，说明之前的字母都已经找到。

## 注意

- 操作过程中遇到一个数据复制的问题，JSON.parse(JSON.stringify(board)) 不管是多维数据还是一维数组用这个方案都可以解决

- 检查越界问题要小心超出边界报错

- ++i 与 i++ 的执行顺序问题，如果几个函数共用一个自增变量，应该单独作为变量保存，否则自增会持续增长而不是回到初始状态，会导致剩下的变量不一致