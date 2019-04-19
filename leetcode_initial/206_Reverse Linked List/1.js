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

// Iterative

var reverseList = function(head) {
  let pre = null; 
  while(head !== null) {
    let temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }
  return pre; 
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

console.log(reverseList(head));
