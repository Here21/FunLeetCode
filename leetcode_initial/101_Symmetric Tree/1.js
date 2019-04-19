var isSymmetric = function(root) {
  return helper(root, root);
  function helper(L, R) {
    if(L === null && R === null) return true;
    if(L === null || R === null) return false;
    if(L.val !== R.val) return false;
    return helper(L.left, R.right) && helper(L.right, R.left);
  }
};

const tree1 = {
  val: 3,
  left: {
    val: 0,
    left: null,
    right: null
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
}

const tree2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    },
  },
}

console.log(isSymmetric(tree2));