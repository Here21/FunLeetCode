# 21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

**Example:**

```js
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

## 解题

链表类型的题目处理类似数组，开始的思路是用递归处理两个列表，把链表的节点放入新的链表，然后返回新链表。

这种解法有点类似**19_Remove Nth Node From End of List Approach 2**