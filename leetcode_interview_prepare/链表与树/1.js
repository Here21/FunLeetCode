/*
两数相加
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var current = null;
var l1 = (current = new ListNode(1));
current.next = new ListNode(8);
// current = current.next;
// current.next = new ListNode(3);
// current = current.next;

var l2 = (current = new ListNode(0));
// current.next = new ListNode(6);
// current = current.next;
// current.next = new ListNode(4);
// current = current.next;

var addTwoNumbers = function (l1, l2) {
  let newList = new ListNode(0);
  let p = l1,
    q = l2,
    tempList = newList;
  let carry = 0;

  while (p || q) {
    const vp = p ? p.val : 0;
    const vq = q ? q.val : 0;
    const sum = vp + vq + carry;
    carry = Math.floor(sum / 10);
    // console.log(vp, vq, sum, carry);
    tempList.next = new ListNode(sum % 10);
    tempList = tempList.next;
    p = p ? p.next : null;
    q = q ? q.next : null;
  }
  if (carry) {
    tempList.next = new ListNode(carry); // 最后一位
  }
  return newList.next;
};

console.log(l1, l2);
console.log(addTwoNumbers(l1, l2));
