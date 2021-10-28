/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
  //1. length
  if (str1.length !== str2.length) {
    return false;
  }
  //2. all items of str1 in str2
  for (var x of str1) {
    if (!str2.includes(x)) {
      return false;
    }
  }

  //3. all items of str2 in str1
  for (var x of str2) {
    if (!str1.includes(x)) {
      return false;
    }
  }
  return true;
}

console.log(rearrangeChar('afaw1', '1afaw'));
