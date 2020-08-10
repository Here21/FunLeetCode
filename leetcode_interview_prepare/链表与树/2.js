/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var current = null;
var l1 = (current = new ListNode(1));
current.next = new ListNode(2);
current = current.next;
current.next = new ListNode(3);
current = current.next;
current.next = new ListNode(4);
current = current.next;
current.next = new ListNode(5);

var reverseList = function (head) {
  let list = null;
  let current = null;
  let tempList = head;

  while (tempList) {
    let node = head.next;
    list = node;
    current = node;
    node.next = null;
  }
};

console.log(l1);
console.log(reverseList(l1));
