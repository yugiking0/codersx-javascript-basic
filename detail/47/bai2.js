/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */

var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');

function diff(fromDate, toDate) {
  return (toDate - fromDate) / (1000 * 60 * 24 * 60);
}

// console.log((toDate - fromDate) / (1000 * 60 * 24 * 60));
console.log(diff(fromDate, toDate));
