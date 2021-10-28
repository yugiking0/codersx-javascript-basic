/**
 * BÀI 5
Viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không
 */

// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không
function startWith(str) {
  if (str.substring(0, 4) === 'Java') {
    return true;
  }
  return false;
}

startWith('Javascript');
console.log(startWith('Javascript'));
