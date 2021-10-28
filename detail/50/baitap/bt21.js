/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của tích 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của tích 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, -3, 8, -9]
Output: 27 (là hiệu của -9 và -3)

*/
function maxMultiply(arr) {
  var max = arr[0] * arr[1];
  for (var i = 0; i < arr.length; i++) {
    for (var y = 0; y < arr.length; y++) {
      if (i !== y) {
        max = arr[i] * arr[y] > max ? arr[i] * arr[y] : max;
      }
    }
  }
  return max;
}

console.log(maxMultiply([1, 2, -3, 8, -9])); // 27
