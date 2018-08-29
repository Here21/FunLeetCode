# 56. Merge Intervals

Given a collection of intervals, merge all overlapping intervals.

**Example 1:**

```js
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

**Example 2:**

```js
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
```

## 解法

这道题是个数组类型的题，比较简单。

```js
Input: [[1,3],[2,6],[8,10],[15,18]]

/*
     [1, 3]   [2, 6]   [8, 10]   [15, 18]
      ↑  ↑

      ↑           ↑
                        ↑   ↑
                                   ↑   ↑
*/
// 线性扫描
```