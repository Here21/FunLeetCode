/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let list = new ListNode(0);
  const _l1 = l1;
  const _l2 = l2;
  let carry = 0;

  function backtracking(l1, l2) {
    if (l1 === null && l2 === null) {
      return list;
    }
    if (l1 === null) {
      let res = l2.val + carry;
      carry = Math.floor(res / 10);
      list = l2.val + carry;
    }
    if (l2 === null) {
      list = l1.val + carry;
    }
  }
};

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
};

const l1 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
};
//  1 - 3 - 4
//  2 - 5 - 7
