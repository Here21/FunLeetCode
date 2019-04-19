# 39. Combination Sum

Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

**Example 1:**

```js
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
```

**Example 2:**

```js
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

## 解法

这道题是个典型的搜索类型题目，与[17题approach 2](../17_Letter Combinations of a Phone Number/2.js)用到的方法类似都是采用DFS深度优先搜索。

然后是考虑剪枝。看代码会清晰很多。

有意思的事发现我刚开始用`展开表达式[...]`提交答案结果是116ms，然后看到速度最快的答案是62ms，用到的是`array.slice()`，然后我改用`array.slice()`提交了一次，速度为82ms，反复试了好几遍都是这个结果，以前没注意两者有什么区别，可以研究一下各种返回新引用的函数内部运行机制。