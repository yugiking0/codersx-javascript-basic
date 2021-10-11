# node co

---

## 1. Xử lý đọc 3 file theo thứ tự bất đồng bộ bằng Promise

- Ở bài trước ta đã học đọc 3 file bằng Promise + fs.readFile liên tục như sau:

```js
const fs = require('fs');

let readPromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) return reject(new Error(error));
      return resolve(data);
    });
  });
};

readPromise('./song1.txt').then(
  (data) => console.log(data),
  (err) => console.log(err)
);

readPromise('./song2.txt').then(
  (data) => console.log(data),
  (err) => console.log(err)
);

readPromise('./song3.txt').then(
  (data) => console.log(data),
  (err) => console.log(err)
);
```

- Hay đọc liên tục kiểu:

```js
const fs = require('fs');

let readPromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) return reject(new Error(error));
      return resolve(data);
    });
  });
};

readPromise('./song1.txt')
  .then((data1) => {
    console.log(data1);
    return readPromise('./song2.txt');
  })
  .then((data2) => {
    console.log(data2);
    return readPromise('./song3.txt');
  })
  .then((data3) => {
    console.log(data3);
    return readPromise('./song3.txt');
  })
  .catch((err) => console.log(err));
```

- Hoặc sử dụng Promise.all như sau:

```js
const fs = require('fs');

let readPromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) return reject(err);
      return resolve(data);
    });
  });
};

Promise.all([
  readPromise('./song1.txt'),
  readPromise('./song2.txt'),
  readPromise('./song3.txt'),
])
  .then((arr) => readEach(arr)) // .then((arr) => console.log(arr))
  .catch((err) => console.log(err + ''));

let readEach = (arr) => {
  arr.forEach((item) => {
    console.log(item);
  });
};
```

## 2. Sử dụng Node Co xử lý nhiều Promise theo thứ tự đồng bộ

- Sử dụng Node co để đọc theo thứ tự các file đồng bộ trong xử lý bất đồng bộ.
- Có thể xử lý như sau:

  - B1: cần cài đặt thư viện Node co ở bên ngoài
    > npm install co
  - B2: Cấu trúc của Node co như sau:

    ```js
    const co = require('co');

    var fn = co(function *(){(val) {
      return yield Promise.resolve(val);
    });

    // prettier-ignore
    fn(true).then(function (val) {

    });
    ```

    - Trong đó:
      - `co(function*())` : Phải có dấu \* ở đây được gọi là `Generator Function`.
      - keyword `yield` : Từ khóa `yield` có khả năng gọi `Promise`.

  - B3: Ta viết lại như sau:

```js
const fs = require('fs');
const co = require('co');

let readPromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    });
  });
};

co(function* () {
  return yield readPromise('./song1.txt');
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err + ''));
```

- Hoặc ta viết liên tục xử lý nhiều Promise trong khối Block lệnh Co như sau:

```js
co(function* () {
  var song1 = yield readPromise('./song1.txt');
  var song2 = yield readPromise('./song2.txt');
  var song3 = yield readPromise('./song3.txt');
  console.log(song1, song2, song3);
});
```

- Hoặc

```js
var arr = co(function* () {
  var song1 = yield readPromise('./song2.txt');
  var song2 = yield readPromise('./song1.txt');
  var song3 = yield readPromise('./song3.txt');
  return [song1, song2, song3];
})
  .then((data) => data)
  .catch((err) => console.log(err + ''));

setTimeout(() => {
  console.log(arr);
}, 2000);
```

## 3. Sử dụng Node Co như một hàm truyền tham số vào.

- Ta có thể xử lý `yield` là 1 mảng như sau:

```js
co(function* () {
  var values = yield [
    readPromise('./song2.txt'),
    readPromise('./song1.txt'),
    readPromise('./song3.txt'),
  ];
  return values;
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err + ''));
```

```js
var arr = co(function* () {
  var values = yield [
    readPromise('./song2.txt'),
    readPromise('./song1.txt'),
    readPromise('./song3.txt'),
  ];
  return values;
})
  .then((data) => data)
  .catch((err) => err + '');

setTimeout(() => {
  console.log(arr);
}, 1000);
```
