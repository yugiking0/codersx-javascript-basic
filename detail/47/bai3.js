/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ
 * cách ngày được truyền vào n ngày
 */

var date = new Date('06/10/2019');

function subtractDays(date, n) {
  var day = date.getDate();
  return date.setDate(day - n);
}
console.log(subtractDays(date, 5));
