# 206. Reverse Linked List

Reverse a singly linked list.

**Example:**

```js
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

**Follow up:**

A linked list can be reversed either iteratively or recursively. Could you implement both?

## 解法

### Iterative

两种方法的解法思路大致相同，类似于将两个满水的杯子互换一下，需要借助一个空杯子。

```js
/*
    1   -   2   -   3
    ↑
   head

现将head.next的值保存下来，然后截断链表，再让head移到下一个位置

    1   -   2   -   3
    ↑       ↑
   pre     head

   ...

*/
```

### Recursively