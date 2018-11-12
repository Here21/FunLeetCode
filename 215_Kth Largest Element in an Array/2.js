/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


//  最快的答案

var findKthLargest = function(nums, k) {
  return getNthLargest(nums, 0, nums.length-1, k, nums.length);
};

function getNthLargest(arr, start, end, n, totalLength) {
let newMid = partition(arr, start, end);
if (newMid === totalLength - n) {
  return arr[newMid];
} else if (newMid > totalLength - n) {
  return getNthLargest(arr, start, newMid - 1, n, totalLength);
} else {
  return getNthLargest(arr, newMid + 1, end, n, totalLength);
}
}

function swap(arr, i, j) {
let tmp = arr[i];
arr[i] = arr[j];
arr[j] = tmp;
}

function partition(arr, start, end) {
let mid = Math.floor((end + start) / 2);
let val = arr[mid];
swap(arr, mid, end);
let last = end - 1;

while (start <= last) {
  while (arr[start] < val) {
    start++;
  }
  while (arr[last] >= val) {
    last--;
  }
  if (start <= last) {
    swap(arr, start, last);
    start++;
    last--;
  }
}
swap(arr, start, end);
return start;
}