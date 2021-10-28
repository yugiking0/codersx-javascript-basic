/**
 * BÀI 1
Viết hàm đảo ngược chuỗi
 */

// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str) {
  var result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result = result.concat(str[i]);
  }
  console.log(result);
  return result;
}

reverse('abc');
