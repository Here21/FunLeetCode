# 200. Number of Islands

Given a 2d grid map of `'1'`s (land) and `'0'`s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**

```js
Input:
11110
11010
11000
00000

Output: 1
```

**Example 2:**

```js
Input:
11000
11000
00100
00011

Output: 3
```

## 解法

一个很典型的`DFS`搜索题目，我们先遍历整个矩阵，然后在找到的陆地（`'1'`）进行深度搜索，返回的条件就是没有相连的陆地。

在搜索的过程中，将搜索过的陆地`'1'`变为海洋`'0'`，类似于做标记，为了记住哪些是遍历过的，避免重复遍历。

```js
/*
    1 1 0 0 0
    1 1 0 0 0
    0 0 1 0 0
    0 0 0 1 1

    0 0 0 0 0
    0 0 0 0 0
    0 0 1 0 0
    0 0 0 1 1

    mark = 1

    0 0 0 0 0
    0 0 0 0 0
    0 0 0 0 0
    0 0 0 1 1

    mark = 2

    0 0 0 0 0
    0 0 0 0 0
    0 0 0 0 0
    0 0 0 0 0

    mark = 3
*/

```