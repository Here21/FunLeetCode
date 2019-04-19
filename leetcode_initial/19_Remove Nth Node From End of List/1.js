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

var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;
    for(let i = 0; i < n; i++) {
      fast = fast.next;
      // 判断是否删除的是第一个node
      if (!fast) return head.next;
    }
    while(fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next
    return head;
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
console.log(removeNthFromEnd(list, 5))