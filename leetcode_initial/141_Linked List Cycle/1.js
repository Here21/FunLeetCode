/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(head == null || head.next == null){
    return false; 
  }
  while(head != null) {
    if(head.flag) return true;
    head.flag = true;
    head = head.next;
  }
  return false;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: head
    }
  }
}

console.log(hasCycle(head));