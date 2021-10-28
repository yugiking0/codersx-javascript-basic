const moment = require('moment');

function isWeekend(dateString) {
  var myDay = new moment(dateString, 'YYYYMMDD').format('d');
  if (myDay == 7 || myDay == 0) {
    return true;
  }
  return false;
}

isWeekend('2019/10/27');
console.log(isWeekend('2019/10/27'));

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
