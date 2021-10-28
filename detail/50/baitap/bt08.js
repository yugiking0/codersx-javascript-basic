// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n) {
  if (n === undefined) return [array[0]];
  if (n > 0) return array.splice(0, n);
  return [];
}

first([7, 9, 0, -2]); // [7]
first([7, 9, 0, -2], 3); // [7, 9, 0]
first([7, 9, 0, -2], 6); // [7, 9, 0, -2]
first([7, 9, 0, -2], -3); // []

console.log(first([7, 9, 0, -2]));
