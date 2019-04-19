# 33. Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

**Example 1:**

```js
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```js
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

## 解法

当看到题目中说 **··· O(log n)** ，这道题就是用 **binary search** 没跑了。

二分法要求 **数据是进过排序的** ，题目中原始数据是升序排列，但是在某一点经过了旋转，不过影响不大，需要多个判断。具体分析如下：

```js
/*
nums = [4,5,6,7,0,1,2]
target = 0
 --- binary search ---
s                    mid                   e = nums.length - 1
↓                     ↓                    ↓
4      5      6       7      0      1      2


                s = mid + 1          m = (e - s) / 2 + s     e = nums.length - 1
                ↓                    ↓                       ↓
4   5   6   7   0                    1                       2
*/
```

需要多做的步骤是先要判定`mid`左右是否是被旋转的，如果被旋转的话，二分搜索需要根据左右来分别移动。

```js
if(nums[start] < nums[mid]) {
  if(nums[start] < target && target < nums[mid]) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
} else {
  if(nums[mid] < target && target < nums[end]) {
    start = mid + 1
  } else {
    end = mid - 1;
  }
}
```

每次重新规划的`start / end`都是`mid + 1 / mid - 1`是为了取闭区间，因为开区间肯能会造成`nums[start] < nums[mid]`陷入死循环，当然也有其他方式避免死循环，这里是为了强调**二分法搜索要注意边界条件**。