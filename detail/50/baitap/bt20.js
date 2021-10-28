/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  return Math.abs(arr[0] - arr[arr.length - 1]);
}
// console.log(findmaxDiff([1, 2, 3, 8, 9])); // 8
// console.log(findmaxDiff([1, 2, 3, 18, 9])); //17

function maxMultiply(arr) {
  var max = Math.abs(arr[0] - arr[1]);
  for (var i = 0; i < arr.length; i++) {
    for (var y = i; y < arr.length; y++) {
      if (i !== y) {
        max = Math.abs(arr[i] - arr[y]) > max ? Math.abs(arr[i] - arr[y]) : max;
      }
    }
  }
  return max;
}

console.log(maxMultiply([1, -22, 3, 18, 9])); //17
