# Tìm hiểu Promise

---

![Promise](./images/000.png 'Promise')

## 1. Cấu trúc Promise

> **Promise** is an object or a function with a then method whose behavior confirms to this specification and represents the eventual result of an asynchronous operation.

> Promise là một đối tượng hoặc một hàm với một phương thức xử lý của nó là xác nhận với được mô tả này và đại diện cho kết quả cuối cùng của một hoạt động không đồng bộ.

- Câu lệnh Promise thuộc thư viện chuẩn của NodeJS không cần cài đặt `npm` bổ sung.

```js
Promise((resolve,reject)=>{
    if(error){
      return reject([do something Error]);
    }
    return resolve([do something Data]);
});

```

- **Ví dụ 1:**

```js
// SYNTAX

let aPromise = new Promise((resolve, reject) => {
  // resolve('Thanh cong');
  reject(new Error('Ket noi that bai'));
});

aPromise.then(
  (mess) => console.log('Trang thai: ' + mess),
  (err) => console.log(err + '')
);
```

- **Ví dụ 2:**

```js
// prettier-ignore
// todo: Kiểm tra số truyền vào là số dương, hay số âm.
let checkNumber = function (input) {
  return new Promise((resolve, reject) => {
    if (typeof input != 'number') {
        return reject(new Error('Giá trị truyền vào không phải là kiểu số!' + ''));
    }

    if (input < 0) {
      return console.log(input + ' : Là số âm.');
    } else {
      return console.log(input + ' : Là số dương.');
    }
  });
};

checkNumber('Check').then(
  (res) => console.log(res),
  (err) => console.log(err + '')
);
```

---

## 2. Sử dụng Promise-fs

- Tham khảo cách dùng Promise-fs trước khi đi chi tiết về Promise
- Cần cài đặt promise-fs trước khi sử dụng
  **Các bước thực hiện: Chạy Terminal**
- b1: node init
- b2: npm install promise-fs
  > readFile thuộc Promise-fs là một hàm Callback cần trả về:
  >
  > - .then(data => do something)
  > - .catch(error => do something)
- > Ví dụ: Đọc file bằng readFile từ Promise-fs

```js
// todo: Đọc file bằng readFile từ Promise-fs
var fs = require('promise-fs');
// prettier-ignore
fs.readFile('./detail/docs/test1.txt', {encoding: 'utf8'})
.then(res => console.log(res))
.catch(error =>console.log(error));
```

- Đọc 2 file sẽ viết thành:

```js
// todo: Đọc file bằng readFile từ Promise-fs
var fs = require('promise-fs');

fs.readFile('../docs/test1.txt', { encoding: 'utf8' })
  .then((res1) => {
    console.log(res1);
    return fs.readFile('../docs/test2.txt', { encoding: 'utf8' });
  })
  .then((res2) => console.log(res2))
  .catch((error) => console.log(error));
```

![readFile-promise](./images/001.png 'readFile-promise')

- Vì ở câu lệnh .then thứ nhất `.then((res1)=>..` trả về một Promise nên có thể chuyển tách thành:

```js
fs.readFile('../docs/test1.txt', { encoding: 'utf8' })
  .then((res1) => console.log(res1))
  .then(() => fs.readFile('../docs/test2.txt', { encoding: 'utf8' }))
  .then((res2) => console.log(res2))
  .catch((error) => console.log(error));
```

- Để dễ nhìn và ngắn gọn hơn ta viết lại bằng các hàm: đọc file, xử lý và báo lỗi như sau:

```js
// todo: Đọc nhiều file bằng readFile từ Promise-fs
var fs = require('promise-fs');
var readFilePromise = function (path) {
  return new fs.readFile(path, { encoding: 'utf8' });
};

var onDone = function (data) {
  return console.log(data);
};

var onError = function (error) {
  return console.log(error);
};

//=======================================
readFilePromise('./detail/docs/test1.txt')
  .then((data1) => onDone(data1))
  .then(() => readFilePromise('./detail/docs/test2.txt'))
  .then((data2) => onDone(data2))
  .catch(onError);
```

hoặc

```js
// prettier-ignore
readFilePromise('./detail/docs/test1.txt')
.then(onDone)
.catch(onError);

//=======================================

readFilePromise('./detail/docs/test1.txt')
  .then(onDone)
  .then(() => readFilePromise('./detail/docs/test2.txt'))
  .then(onDone)
  .catch(onError);
```

- Nếu cần đọc nhiều file thì chỉ cần thêm `.then` sẽ dễ dàng mà không bị `Callback Hell`.

```js
readFilePromise('./detail/docs/test1.txt')
  .then((data1) => onDone(data1))
  .then(() => readFilePromise('./detail/docs/test2.txt'))
  .then((data2) => onDone(data2))
  .then(() => readFilePromise('./detail/docs/test3.txt'))
  .then((data3) => onDone(data3))
  .then(() => readFilePromise('./detail/docs/song1.txt'))
  .then((song1) => onDone(song1))
  .then(() => readFilePromise('./detail/docs/song2.txt'))
  .then((song2) => onDone(song2))
  .catch(onError);
```

hoặc

```js
readFilePromise('./detail/docs/test1.txt')
  .then(onDone)
  .then(() => readFilePromise('./detail/docs/test2.txt'))
  .then(onDone)
  .then(() => readFilePromise('./detail/docs/test3.txt'))
  .then(onDone)
  .then(() => readFilePromise('./detail/docs/song1.txt'))
  .then(onDone)
  .then(() => readFilePromise('./detail/docs/song2.txt'))
  .then(onDone)
  .catch(onError);
```

- Xem [Promise-fs](./promise-fs.js)

---

## 3. Viết lại hàm đọc file bằng promise có sẵn

- Viết lại hàm đọc file bằng kết hợp readFile + Promise có tính chất tương tự như hàm readFile thuộc thư viện promise-fs
- Ta sử dụng hàm readFile và Promise có sẵn để viết lại.

```js
// todo: Đọc file bằng readFile + Promise
const fs = require('fs');

let readFilePS = (path) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return rejects(err);
      }
      return resolve(data);
    });
  });
};
readFilePS('./detail/docs/test1.txt').then(
  (res) => console.log(res),
  (err) => console.log(err)
);
```

- Ta viết ngắn gọn lại bằng các hàm

```js
// todo: Đọc file bằng readFile + Promise
const fs = require('fs');

let readFilePS = (path) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return rejects(new Error(err));
      }
      return resolve(data);
    });
  });
};

// Finish
var onDone = function (data) {
  return console.log('Du lieu: ' + data);
};

// Error
var onError = function (error) {
  return console.log(error + '');
};

readFilePS('./detail/docs/test1.txt').then(onDone, onError);
readFilePS('./detail/docs/test12.txt').then(onDone, onError);
readFilePS('./detail/docs/test2.txt').then(onDone, onError);
readFilePS('./detail/docs/test3.txt').then(onDone, onError);
```

### _**`Viết hàm đọc các file theo tuần tự lồng nhau sẽ thế nào???`**_

```js
// todo: Đọc file bằng readFile + Promise
const fs = require('fs');

var onDone = function (data) {
  return console.log('Du lieu: ' + data);
};

var onError = function (error) {
  return console.log(error + '');
};

var readFile2 = (path) => {
  return new Promise((resolve, rejects) => {
    for (var i = 0; i < path.length; i++) {
      fs.readFile(path[i], { encoding: 'utf-8' }, (err, data) => {
        if (err) {
          rejects(new Error(err));
        }
        return resolve(console.log(data));
      });
    }
  });
};

var path = [
  './detail/docs/test1.txt',
  './detail/docs/test21.txt',
  './detail/docs/test3.txt',
];
readFile2(path).then(onDone, onError);
```

- Truyền vào kiểm mảng
- Chưa return ra để xử lý được.
- Xử lý tạm kiểu này:

```js
// todo: Đọc file bằng readFile + Promise
const fs = require('fs');

var onDone = function (data) {
  return console.log('Du lieu: ' + data);
};

var onError = function (error) {
  console.log(error + '');
};

var readFile2 = (path) => {
  return new Promise((resolve, rejects) => {
    for (var i = 0; i < path.length; i++) {
      fs.readFile(path[i], { encoding: 'utf-8' }, (err, data) => {
        if (err) {
          return rejects(new Error(err));
        }
        return resolve(onDone(data));
      });
    }
  });
};

var path = [
  './detail/docs/test21.txt',
  './detail/docs/test2.txt',
  './detail/docs/test3.txt',
];
readFile2(path).then('', onError);
```

- Final

```js
//todo: Đọc file bằng readFile + Promise

var fs = require('fs');

// Sử dụng readFile và Promise để viết lại xử lý tương tự promise-fs.readFile

let readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    });
  });
};

readFile('../docs/test1.txt')
  .then((res) => console.log(res))
  .catch((err) => console.log(err + ''));

var onDone = (res) => console.log(res);
var onError = (err) => console.log(err);

//prettier-ignore
readFile('../docs/test2.txt')
.then(onDone)
.catch(onError);

// Xử lý đọc nhiều file liên tục và lần lượt
readFile('../docs/song1.txt')
  .then(onDone)
  .then(() => readFile('../docs/song2.txt'))
  .then(onDone)
  .catch(onError);
```

- Xem [readFile Promise](./readfile-pr.js)

---

## Bài tập:

```js
var request = require('request');

/**
 * Module `request` dùng để tải về 1 đường dẫn nào đó. Hãy thử chạy code để xem cách hoạt động
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
 */
```

- Xem [Do Exercise](./do-exercise.js)
  xử lý trước đó :
- Xem [Older Exercise](./older-exercise.js)
