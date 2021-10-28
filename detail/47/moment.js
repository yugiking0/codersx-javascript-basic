const moment = require('moment');

moment.locale(); // en
console.log(moment().format('LL')); // October 15, 2021
console.log(moment().subtract(6, 'days').calendar()); // Last Saturday at 5:27 PM

moment.locale('vi'); // vi
console.log(moment().format('LL')); // 15 tháng 10 năm 2021
console.log(moment().subtract(6, 'days').calendar()); // thứ bảy tuần trước lúc 17:26
