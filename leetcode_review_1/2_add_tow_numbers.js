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
  let fakerList = list;
  let _l1 = l1;
  let _l2 = l2;
  let carry = 0;

  while (_l1 || _l2) {
    // 取链表的值
    let val1 = _l1 ? _l1.val : 0;
    let val2 = _l2 ? _l2.val : 0;

    // 求该节点的值
    let value = val1 + val2 + carry;
    console.log("value ---", value, "--", carry);

    // 判断进位
    if (value >= 10) {
      carry = Math.floor(value / 10);
      value = value % 10;
    } else {
      carry = 0;
    }

    // 保存值，切换节点
    fakerList.next = new ListNode(value);
    fakerList = fakerList.next;

    _l1 = _l1 ? _l1.next : null;
    _l2 = _l2 ? _l2.next : null;
  }
  if (carry) {
    fakerList.next = new ListNode(carry);
  }

  return list.next;
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

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 7,
      next: null
    }
  }
};
//  1 - 3 - 4
//  2 - 5 - 7

console.log(addTwoNumbers(l1, l2));
