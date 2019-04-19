# 19. Remove Nth Node From End of List

Given a linked list, remove the n-th node from the end of list and return its head.

**Example:**

```js
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
```

**Note:**

Given n will always be valid.

**Follow up:**

Could you do this in one pass?

## 解法

这道题考察的是链表的问题，回顾一下[链表](https://juejin.im/entry/59cb70995188256aa423b680)。

这道题相当于是删除链表指定元素，明白链表结构的话，处理起来就很简单了。在处理这道题时，由于题目中已经告知 **Given n will always be valid**，所以这里不考虑越界问题，但是有个需要考虑的是输入的n的节点是倒数的。

在处理这道题首先要找到倒数第n个节点的位置，然后让前一个的指针直接指向第n个节点的下一个节点即可，但是这里有个越界问题，就是`n`等于`head`的长度，也就是要倒序删除链表的第一个节点。

这个越界问题有两个处理方法，解法一是加一个判断条件，解法二是给这个新创建一个空链（`nodeList`）作为第0个元素，将`head`赋值给`nodeList.next`。

如何找到这个第n个元素？看下面的图例解释利用差值找到元素的位置：

```js
const n = 2;
/*
*                              (target)
*  head      1  ->  2  ->  3  ->  4  ->  5
*  
*
*  slow  ↑
*
*  fast             ↑
*/

// 先让fast走n个距离，然后slow和fast再一起走

/*
*                              (target)
*  head      1  ->  2  ->  3  ->  4  ->  5
*  
*
*  slow                    ↑
*
*  fast                                  ↑
*/
```

解法二的图示可能有一些区别：

解法二操作的是`nodeList.next`

```js
/*
*                                        (target)
*  nodeList   0   ->   1  ->  2  ->  3  ->  4  ->  5
*  
*
*  slow    ↑
*
*  fast                       ↑
*/

```