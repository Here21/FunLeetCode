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
var detectCycle = function(head) {
  if(head === null) return null;
  let slow = head;
  let fast = head;
  let isCycle = false;

  while(fast != null && slow != null) {
    slow = slow.next;
    if(fast.next === null) return null;
    fast = fast.next.next;
    if(slow === fast) {
      isCycle = true;
      break;
    }
  }

  if(!isCycle) return null;

  slow = head;
  while(slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}

console.log(detectCycle({}));