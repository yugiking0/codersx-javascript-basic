/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 *
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */

const request = require('request');

let loadUser = (path) => {
  return new Promise((resolve, reject) => {
    return request(path, (error, response, body) => {
      if (error != null) {
        return reject(error);
      }
      return resolve(body);
    });
  });
};

loadUser('https://randomuser.me/api/').then(
  (body) => {
    console.time('Time this: ');
    console.log('User 1: ', JSON.parse(body));
    // console.log(body);
    console.log('============================');
    console.timeEnd('Time this: ');
  },
  (error) => {
    console.error(error);
  }
);

loadUser('https://randomuser.me/api/').then(
  (body) => {
    console.time('Time this: ');
    console.log('User 2: ', JSON.parse(body));
    // console.log(body);
    console.log('============================');
    console.timeEnd('Time this: ');
  },
  (error) => {
    console.error(error);
  }
);
