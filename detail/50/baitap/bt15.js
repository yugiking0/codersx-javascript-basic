// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n) {
  var first = '';
  var last = '';
  for (var i = 0; i < n; i++) {
    first = first.concat(str[i]);
    last = str[str.length - 1 - i].concat(last);
    console.log(first, last);
  }
  return first.concat(last);
}
newString('1wyg5yhd45', 2); // "1w45"
console.log(newString('1wyg5yhd45', 3));
