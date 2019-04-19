var findMedianSortedArrays = function(nums1, nums2) {

  const mergeArray = merge(nums1, nums2);
  console.log(mergeArray);
  if((nums1.length + nums2.length) % 2 === 0) {
    let m = Math.floor((nums1.length + nums2.length - 1) / 2);
    return (mergeArray[m] + mergeArray[m + 1]) / 2;
  }else {
    let m = Math.floor((nums1.length + nums2.length - 1) / 2);
    return mergeArray[m];
  }

  function merge(arr1, arr2) {
    if(arr1.length > arr2.length) return merge(arr2, arr1);
    const result = [];
    let a1 = 0, a2 = 0;
    while(a1 < arr1.length && a2 < arr2.length) {
      if(arr1[a1] < arr2[a2]) {
        result.push(arr1[a1]);
        a1 = a1 + 1;
      } else if (arr1[a1] >= arr2[a2]) {
        result.push(arr2[a2]);
        a2 = a2 + 1;
      }
    }
    while(a1 < arr1.length) {
      result.push(arr1[a1]);
      a1 = a1 + 1;
    }
    while(a2 < arr2.length) {
      result.push(arr2[a2]);
      a2 = a2 + 1;
    }
    return result;
  }  
};

console.log(findMedianSortedArrays([1, 3], [-2, 0]));