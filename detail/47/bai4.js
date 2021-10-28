/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
  var date1 = new Date(a);
  var date2 = new Date(b);
  console.log(date1.valueOf(), date2.valueOf());
  return Math.abs(date1.valueOf() - date2.valueOf());
}
console.log(diffMs('02/10/2019', '10/10/2019'));
// diffMs('02/10/2019', '10/10/2019'); // 20908800000
