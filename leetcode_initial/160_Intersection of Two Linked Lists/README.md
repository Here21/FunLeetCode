# 160. Intersection of Two Linked Lists

Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

```js
/*
A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
B:     b1 → b2 → b3
*/
```

begin to intersect at node c1.

**Notes:**

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.

**Credits:**
Special thanks to @stellari for adding this problem and creating all test cases.

## 解法

这道题`141_Linked List Cycle`有点像，判断交点。但是我觉得用`Set`做会更直观。具体看[代码](./1.js)

提交完以后看到其他更快的答案，是类似于[这里](./2.js)这种写法，我表示很不明白，因为`p1 === p2`是指向两个不同的对象，在内存地址中是不同的两块空间，在`JS`中这是不可能想等的。

举个例子：

```js
var obj = { a: 1, b: 2};

var a = obj;
var b = obj;

a === b // true
a === obj // true

// 歧义
var obj = { a: 1, b: 2};
var obj1 = { a: 1, b: 2};

obj === obj1 // false
```

这里`obj`与`obj1`指向不同的内存地址，是不能直接用判断来判定“内容”是否想等。在我本地跑测试也一样，但是却可以通过测试用例，我就不是很理解了。