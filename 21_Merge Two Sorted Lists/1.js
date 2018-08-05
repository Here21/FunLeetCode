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

 
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
//   return this;
// }

var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    let nodeList = new ListNode(0);

    merge(l1, l2, nodeList);
    return nodeList.next;
    function merge(n1, n2, list) {
      if(n1 === null) {
        list.next = n2
        return;
      }
      if(n2 === null) {
        list.next = n1
        return;
      }
      if(n1.val <= n2.val) {
        list.next = n1;
        merge(n1.next, n2, list.next);
        return;
      } else if(n2.val < n1.val) {
        list.next = n2;
        merge(n2.next, n1, list.next);
        return;
      }
    }
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