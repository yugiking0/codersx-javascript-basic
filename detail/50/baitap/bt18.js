/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
  let newArr = arr.reduce(function (sumOf, item) {
    var i = sumOf.map((x) => x[0]).find((x) => x == item); // Xác định index của item đã có trong mảng
    if (!i) {
      sumOf.push([item, 1]);
    } else {
      sumOf[i - 1][1]++;
    }
    return sumOf;
  }, []);

  newArr = newArr.sort((a, b) => {
    return b[1] - a[1];
  });

  var max = newArr[0][1];
  var result = newArr.filter((item) => item[1] >= max).map((item) => item[0]);
  return result;
}

console.log(findMostFrequent([1, 2, 3, 4, 1, 2, 2]));
