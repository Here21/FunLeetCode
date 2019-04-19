'use strict';

//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var highDigit = 0;
var addTwoNumbers = function(l1, l2) {
  var val = l1.val + l2.val + highDigit;
  if (val > 9) {
    val -= 10;
    highDigit = 1;
  }
  else  {
    highDigit = 0;
  }
  console.log(val);
  return new ListNode(val);
};

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

var result = null;
function AddLinkNode (l1, l2) {
  var cursor1 = l1;
  var cursor2 = l2;
  var newCursor = result = addTwoNumbers(cursor1, cursor2);
  var cursor = newCursor;
  cursor1 = cursor1.next;
  cursor2 = cursor2.next;
  while(cursor1 && cursor2) {
    cursor.next = addTwoNumbers(cursor1, cursor2);
    cursor = cursor.next;
    cursor1 = cursor1.next;
    cursor2 = cursor2.next;
  }
  return newCursor;
}
AddLinkNode(l1, l2);
