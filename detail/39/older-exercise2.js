/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

const axios = require('axios');

axios({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/todos/1',
})
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

axios({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/todos/2',
})
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function (err) {
    console.log(err);
  });
