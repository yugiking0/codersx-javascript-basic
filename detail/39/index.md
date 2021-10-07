# SYNC. VS. ASYNC

(SYNCHRONOUS VS ASYNCHRONOUS)
LẬP TRÌNH ĐỒNG BỘ VÀ KHÔNG ĐỒNG BỘ

---

## 1. Ví dụ:

- Ta xem ví dụ xử lý đọc file có sẵn là readFileSyn(Đọc file đồng bộ Synchronous) và readFile(Đọc file Bất đồng bộ Asynchronous) trong thư viện fs của NodeJS như sau:

```js
//!Synchronous vs Asynchronous
const fs = require('fs');

//note: readFileSyn - readFile

//? Synchronous: readFileSyn
console.log('Begin Sync');
var data = fs.readFileSync('./detail/docs/test1.txt', 'utf-8');
console.log('Noi dung readFileSyn: ', data);
console.log('End Sync');
console.log('================================');
//? Asynchronous: readFile
console.log('Begin Async');
var data = fs.readFile('./detail/docs/test2.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(new Error(err));
  }
  console.log('Noi dung readFile Async: ', data);
});

console.log('End Async');
```

<img src="./images/001.png" alt="JAVASCRIPT VỚI HTML"/>

Kết quả trả về:

![Console](./images/002.png 'Console')

---

## 2. Nội dung:

- Synchronous (Đồng bộ) là việc thực hiện các câu lệnh trong file từ trên xuống và trả về kết quả theo thứ tự từ trên xuống, tại một thời điểm chỉ xử lý một dòng lệnh.

- Asynchronous (Bất đồng bộ) là việc xử lý các câu lệnh trả về kết quả không theo thứ tự từ trên xuống, tại một thời điểm có thể xử lý cùng lúc nhiều dòng lệnh bất đồng bộ khác nhau.

---

## 3. Bài tập:

### 3.1 Bài tập 1:

- Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
  - https://randomuser.me/api/
- Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/ hoặc google 'console.time'

- Xem [Do Exercise](./exercise1.js)
  xử lý trước đó :
- Xem [Older Exercise](./older-exercise1.js)

### 3.2 Bài tập 2:

- Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):

  - https://jsonplaceholder.typicode.com/todos/1
  - https://jsonplaceholder.typicode.com/todos/2

- Xem [Do Exercise](./exercise3.js)
- Xem [Do Exercise](./exercise2.js)
  xử lý trước đó :
- Xem [Older Exercise](./older-exercise2.js)

```js
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
```
