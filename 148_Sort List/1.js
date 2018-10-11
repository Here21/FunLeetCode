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
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var sortList = function(head) {

  return cutList(head);
  
  function cutList(head) {
    // 终止条件
    if(head === null || head.next === null) {
      return head;
    }
    // 1、找到中点，拆成两半
    let slow = head, fast = head;
    // 尾巴，为了截断链表
    let tail = null;
    while(fast !== null && fast.next !== null) {
      tail = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    tail.next = null;

    // 2、两半分别递归，[head, slow) /tail/, [slow, fast]
    let l1 = sortList(head), l2 = sortList(slow);

    // 3、合并
    return merge(l1, l2);
  }

  function merge(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;
    // 节点比较大小
    while(l1 !== null && l2 !== null) {
      if(l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      // 切换下一节点
      tail = tail.next;
    }

    if(l1 !== null) {
      tail.next = l1;
    }
    if(l2 !== null) {
      tail.next = l2;
    }

    return dummy.next;
  }
};

const list = {
  val: 4,
  next: {
    val: 8,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 1,
          next: {
            val: 0,
            next: null
          }
        }
      }
    }
  }
}

console.log(sortList(list));
