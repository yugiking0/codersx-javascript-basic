/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

const axios = require('axios');
axios
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
