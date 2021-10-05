/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

const axios = require('axios');
// axios({
//   method: 'GET',
//   url: 'https://jsonplaceholder.typicode.com/todos/1',
// })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function onDone(res) {
  return console.log(res.data);
}

function onError(err) {
  return console.error(err + '');
}
let getUser = (path) => {
  return axios({
    method: 'GET',
    url: path,
  });
};
getUser('https://jsonplaceholder.typicode.com/todos/1')
  .then(onDone)
  .catch(onError);

getUser('https://jsonplaceholder.typicode.com/todos/2')
  .then(onDone)
  .catch(onError);
