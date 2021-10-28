# Date

---

## 1. Nội dung

- Tìm hiểu định dạng date trong Javascript
- Học về Module NodeJS xử lý date là moment.js

## 2. Tổng quan

### 2.1 Cấu trúc

```js
new Date();
new Date(value);
new Date(dateString);

new Date(year, monthIndex);
new Date(year, monthIndex, day);
new Date(year, monthIndex, day, hours);
new Date(year, monthIndex, day, hours, minutes);
new Date(year, monthIndex, day, hours, minutes, seconds);
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);
```

### 2.2 Ví dụ

- Khởi tạo

```js
var now = new Date();
console.log(now); // 2021-07-15T08:51:01.087Z

var myBirthday = new Date('1999-03-14');
console.log(myBirthday); // 1999-03-14T00:00:00.000Z

console.log(new Date(2000, 10, 25)); // 2000-11-24T17:00:00.000Z
console.log(new Date(2000, 14, 25)); // 2001-03-24T17:00:00.000Z
```

- Xử lý với `.getTime()` sẽ lấy số `Milliseconds` từ `Jan 1, 1970, 00:00:00.000 GMT`

```js
var now = new Date();
console.log(now); // 2021-07-15T08:51:01.087Z
var myBirthday = new Date('1999-03-14');
console.log(myBirthday); // 1999-03-14T00:00:00.000Z

// milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(now.getTime()); // 1634291023067
console.log(myBirthday.getTime()); // 921369600000
```

- Với `.getTime()` ta có thể xử lý khoảng cách về thời gian giữa 2 mốc thời gian.

## 3. Module moment.js

### 3.1 Các ví dụ

- Khởi tạo Object `moment` không cần `new`

```js
const moment = require('moment');

var now = moment();
console.log(now); // Moment<2021-05-15T16:54:39+07:00>
```

- Dùng `.formNow` để tính thời gian truyền vào đến hiện tại.

```js
const moment = require('moment');

var now = moment('2021-10-17 07:00');
var day1 = moment('2021-08-21 17:00');
var day2 = moment('2021-10-16 07:00');

console.log(now); // Moment<2021-10-17T07:00:00+07:00>
console.log(day1.fromNow()); // 2 months ago
console.log(day2.fromNow()); // in 14 hours
```

- Dùng `.format` định dạng thời gian

```js
const moment = require('moment');

var now = moment('2021-10-17 07:10:12');
console.log(now); // Moment<2021-10-17T07:10:12+07:00>
console.log(now.format('DD/MM/YYYY HH:mm:ss')); // 17/10/2021 07:10:12
console.log(now.format('YYYY MMM DD')); // 2021 Oct 17
console.log(now.format('DD MMM, YYYY')); // 17 Oct, 2021
```

- Tham khảo thêm ở link: [MomentJS https://momentjs.com/](https://momentjs.com/)

---

### 3.2 Các nhóm lệnh hay sử dụng

#### Format Dates

```js
moment().format('MMMM Do YYYY, h:mm:ss a'); // October 15th 2021, 5:19:34 pm
moment().format('dddd'); // Friday
moment().format('MMM Do YY'); // Oct 15th 21
moment().format('YYYY [escaped] YYYY'); // 2021 escaped 2021
moment().format(); // 2021-10-15T17:19:34+07:00
```

#### Relative Time

```js
moment('20111031', 'YYYYMMDD').fromNow(); // 10 years ago
moment('20120620', 'YYYYMMDD').fromNow(); // 9 years ago
moment().startOf('day').fromNow(); // 17 hours ago
moment().endOf('day').fromNow(); // in 7 hours
moment().startOf('hour').fromNow(); // 21 minutes ago
```

#### Calendar Time

```js
moment().subtract(10, 'days').calendar(); // 10/05/2021
moment().subtract(6, 'days').calendar(); // Last Saturday at 5:21 PM
moment().subtract(3, 'days').calendar(); // Last Tuesday at 5:21 PM
moment().subtract(1, 'days').calendar(); // Yesterday at 5:21 PM
moment().calendar(); // Today at 5:21 PM
moment().add(1, 'days').calendar(); // Tomorrow at 5:21 PM
moment().add(3, 'days').calendar(); // Monday at 5:21 PM
moment().add(10, 'days').calendar(); // 10/25/2021
```

#### Multiple Locale Support

```js
moment.locale(); // en
moment().format('LT'); // 5:22 PM
moment().format('LTS'); // 5:22:02 PM
moment().format('L'); // 10/15/2021
moment().format('l'); // 10/15/2021
moment().format('LL'); // October 15, 2021
moment().format('ll'); // Oct 15, 2021
moment().format('LLL'); // October 15, 2021 5:22 PM
moment().format('lll'); // Oct 15, 2021 5:22 PM
moment().format('LLLL'); // Friday, October 15, 2021 5:22 PM
moment().format('llll'); // Fri, Oct 15, 2021 5:22 PM
```

#### Change Location

```js
const moment = require('moment');

moment.locale(); // en
console.log(moment().format('LL')); // October 15, 2021
console.log(moment().subtract(6, 'days').calendar()); // Last Saturday at 5:27 PM

moment.locale('vi'); // vi
console.log(moment().format('LL')); // 15 tháng 10 năm 2021
console.log(moment().subtract(6, 'days').calendar()); // thứ bảy tuần trước lúc 17:26
```

## 4. Bài tập

### 4.1 Bài 1

```js
/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật),
 * ngược lại trả về false
 */

function isWeekend(dateString) {
  // Write code here...
}
```

### 4.2 Bài 2

```js
/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */

var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');

function diff(fromDate, toDate) {
  // Write code here...
}
```

### 4.3 Bài 3

```js
/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ
 * cách ngày được truyền vào n ngày
 */

var date = new Date('06/10/2019');

function subtractDays(date, n) {
  // Write code here...
}
```

### 4.4 Bài 4

```js
/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
  // viết code ở đây
}
diffMs('02/10/2019', '10/10/2019'); // 20908800000
```

---

## Giải Bài Tập

### Bài 1:

```js
/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật),
 * ngược lại trả về false
 */
const moment = require('moment');

function isWeekend(dateString) {
  var myDay = new moment(dateString, 'YYYYMMDD').format('d');
  if (myDay == 7 || myDay == 0) {
    return true;
  }
  return false;
}

console.log(isWeekend('2019/10/28')); // false
console.log(isWeekend('2019/10/27')); // true

// Cách 2 không dùng momentJS
function isWeekend(dateString) {
  var convertDate = Date.parse(dateString);
  var myDay = new Date(convertDate).getDay();

  if (myDay == 7 || myDay == 0) {
    return true;
  }
  return false;
}

var dateString = '2019/10/27';
var convertDate = Date.parse(dateString);
var myDay = new Date(convertDate);

console.log(myDay.getDay());

console.log(isWeekend('2019/10/28'));
console.log(isWeekend('2019/10/27'));
```

### Bài 2:

```js
/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */

var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');

function diff(fromDate, toDate) {
  return (toDate - fromDate) / (1000 * 60 * 24 * 60);
}
```

### Bài 3:

```js
/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ
 * cách ngày được truyền vào n ngày
 */

var date = new Date('06/10/2019');

function subtractDays(date, n) {
  var day = date.getDate();
  return date.setDate(day - n);
}
```

### Bài 4:

```js
/**
 * Tính số ms chênh lệch giữa date b và date a
 */
function diffMs(a, b) {
  // viết code ở đây
  var date1 = new Date(a);
  var date2 = new Date(b);
  return Math.abs(date1.valueOf() - date2.valueOf());
}
```

---
