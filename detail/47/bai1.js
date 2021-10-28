var dateString = '2019/10/27';
var convertDate = Date.parse(dateString);
var myDay = new Date(convertDate);

console.log(myDay.getDay());

function isWeekend(dateString) {
  var convertDate = Date.parse(dateString);
  var myDay = new Date(convertDate).getDay();

  if (myDay == 7 || myDay == 0) {
    return true;
  }
  return false;
}

console.log(isWeekend('2019/10/28'));
console.log(isWeekend('2019/10/27'));
