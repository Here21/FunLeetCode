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
var isPalindrome = function(head) {
  // 1、find middle
  let fast = head, slow = head;
  while(fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // solve odd list
  if(fast != null) {
    slow = slow.next;
  }
  // 2、reverse after middle part
  slow = reverse(slow, null);

  // 3、compare two list
  fast = head;
  while(slow !== null) {
    if(slow.val !== fast.val) return false;
    slow = slow.next;
    fast = fast.next;
  }
  return true;

  function reverse(head, tail) {
    if(head == null) return tail;
    const temp = head.next;
    head.next = tail;
    tail = head;
    return reverse(temp, tail);
  }
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 2,
          next: {
            val: 2,
            next: null
          }
        }
      }
    }
  }
}

console.log(isPalindrome(head));