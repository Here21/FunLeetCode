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
// 实现两个链表
var current = null;
var l1 = current = new ListNode(2);
current.next = new ListNode(4);
current = current.next;
current.next = new ListNode(3);
current = current.next;

var l2 = current = new ListNode(5);
current.next = new ListNode(6);
current = current.next;
current.next = new ListNode(4);
current = current.next;

function ListNode(val) {
  this.val = val;
  this.next = null;
}


function addTwoNumbers (l1, l2) {
  // 做傀儡链表
  let tempList = new ListNode(0);
  let q = l1, p = l2, newList = tempList;
  let carry = 0;
  // 判断链表是否为空链表
  while(q || p) {
    // 链表的下一为如果对空位，则为0
    let a = q ? q.val : 0;
    let b = p ? p.val : 0;
    let sum = a + b + carry;
    // 计算进位
    if (Math.floor(sum / 10)) {
      carry = 1;
    } else {
      carry = 0;
    }
    // 傀儡下的真链表（为了实现反向）
    newList.next = new ListNode(sum % 10);
    newList = newList.next;
    // 链表的下一个node
    q = q ? q.next : null;
    p = p ? p.next : null;
  }

  if(carry > 0) {
    newList.next = new ListNode(carry);
  }
  console.log("newList.next---", tempList.next);
  // 傀儡链表内部的链表为题目要求的反向链表
  return tempList.next;
}

addTwoNumbers(l1, l2);
