/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// HashSet
var getIntersectionNode = function(headA, headB) {
  if(headA === null || headB === null) return null;
  const set = new Set();
  let La = headA;
  let Lb = headB;

  while(La) {
    set.add(La.val);
    La = La.next;
  }
  while(Lb) {
    if(set.has(Lb.val)) {
      return Lb;
    }
    Lb = Lb.next;
  }
  
  return null;
};

const headA = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 6,
      next: {
        val: 9,
        next: {
          val: 11,
          next: null
        }
      }
    }
  }
}
const headB = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 9,
      next: {
        val: 11,
        next: null
      }
    }
  }
}
const c = {
  val: 2,
  next: null
}

console.log(getIntersectionNode(headA, headB));