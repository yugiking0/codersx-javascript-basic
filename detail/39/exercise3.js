/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

const axios = require('axios');

function onDone(res) {
  return console.log(res.data);
}

function onError(err) {
  return console.error(err + '');
}

let getUser = (path) => {
  return new Promise((resolve, reject) => {
    return axios
      .get(path)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

getUser('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => {
    onDone(res);
    return getUser('https://jsonplaceholder.typicode.com/todos/33332');
  })
  .then((res) => {
    onDone(res);
    return getUser('https://jsonplaceholder.typicode.com/todos/3');
  })
  .then((res) => {
    onDone(res);
    return getUser('https://jsonplaceholder.typicode.com/todos/99994');
  })
  .then(onDone)
  .catch(onError);
