/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
  return this;
}

var removeNthFromEnd = function(head, n) {
    let nodeList = ListNode(0);
    nodeList.next = head;
    let slow = nodeList;
    let fast = nodeList;
    for(let i = 0; i < n; i++) {
      fast = fast.next;
    }
    while(fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next
    return nodeList.next;
};

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next:{
          val: 5,
          next: null
        }
      }
    }
  }
}
console.log(removeNthFromEnd(list, 2))