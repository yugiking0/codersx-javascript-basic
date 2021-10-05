var request = require('request');

/**
 * Module `request` dùng để tải về 1 đường dẫn nào đó. Hãy thử chạy code để xem cách hoạt động
 */
console.log('Start fetching...');

request(
  'https://jsonplaceholder.typicode.com/todos/1',
  function (error, response, body) {
    if (error !== null) {
      console.log('error:', error); // Print the error
    }
    console.log('Done:', body);
  }
);

console.log('Nothing');

/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 * Sau 30' không làm được thì có thể lên Slack hỏi
 */
console.log('===========================');

let pathLink = 'https://jsonplaceholder.typicode.com/todos/4';

function load(path) {
  return new Promise(function (resolve, reject) {
    request(path, function (error, response, body) {
      if ((error !== null) | (body.statusCode == 404)) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}

load(pathLink)
  .then(function (body) {
    console.log('Done:', body);
  })
  .catch(function (error) {
    console.error('error:', error);
  });

//Multi load order 1->4

load('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (body) {
    console.log('Done 1:', body);
  })
  .then(function () {
    return load('https://jsonplaceholder.typicode.com/todos/02');
  })
  .then(function (body) {
    console.log('Done 2:', body);
  })
  .then(function () {
    return load('https://jsonplaceholder.typicode.com/todos/3');
  })
  .then(function (body) {
    console.log('Done 3:', body);
  })
  .then(function () {
    return load('https://jsonplaceholder.typicode.com/todos/45');
  })
  .then(function (body) {
    console.log('Done 4:', body);
  })
  .catch(function (error) {
    console.error('error:', error);
  });
