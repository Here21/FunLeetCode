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

// recursively

var reverseList = function(head) {
  return helper(head, null);
  function helper(head, next) {
    if(head === null) return next;
    let temp = head.next;
    head.next = next;
    return helper(temp, head);
  }
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
