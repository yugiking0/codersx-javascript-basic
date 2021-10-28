//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

function omitCharAt(str, n) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (i !== n) {
      result = result.concat(str[i]);
    }
  }
  return result;
}
console.log(omitCharAt('Hello Quang Dat', 8));
