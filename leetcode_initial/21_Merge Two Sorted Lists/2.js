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

 
function ListNode(val) {
  this.val = val;
  this.next = null;
  return this;
}

var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    let dummy = new ListNode(0);
    let list = dummy;

    while(l1 !== null && l2 !== null) {
      if(l1.val <= l2.val) {
        list.next = l1;
        l1 = l1.next;
      } else if(l2.val < l1.val) {
        list.next = l2;
        l2 = l2.next;
      }
      list = list.next;
    }

    list.next = l1 ? l1 : l2;
    return dummy.next;
};

const l1 = {
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

const l2 = {
  val: 3,
  next: {
    val: 6,
    next: {
      val: 7,
      next: {
        val: 8,
        next:{
          val: 10,
          next: null
        }
      }
    }
  }
}

console.log(mergeTwoLists(l1, l2));