/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
  if (arr.length < 2) return 0;
  var result = Math.abs(arr[0] - arr[1]);
  for (var i = 1; i < arr.length - 1; i++) {
    var value = Math.abs(arr[i] - arr[i + 1]);
    result = result > value ? result : value;
  }
  return result;
}

console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));
