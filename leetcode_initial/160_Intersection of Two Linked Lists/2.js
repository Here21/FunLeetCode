// 网上的答案，但是本机测试不通过，因为js判断两个不同存储空间对象始终是false

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
let p1 = headA
let p2 = headB
while (p1 && p2 && p1 !== p2) {
  p1 = p1.next
  p2 = p2.next  
  if (p1 === p2) return p1
  if (!p1) p1 = headB
  if (!p2) p2 = headA
}
return p1
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