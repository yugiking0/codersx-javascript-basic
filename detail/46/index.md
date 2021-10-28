# setInterval và clearInterval

---

## 1. setInterval

### 1.1 Chức năng

- Hàm bất đồng bộ
- Hàm đếm thời gian, sau mỗi móc thời gian sẽ xử lý một hàm nào đó trong khối lệnh, và lặp lại.

### 1.2 Cấu trúc

> setInterval(fn,timeCount)

### 1.3 Ví dụ

- Hiển thị đếm số tăng dần sau mỗi 1s.

```js
var i = 0;
setInterval(() => {
  i++;
  console.log(i);
}, 1000);
```

---

## 2. clearInterval

### 2.1 Chức năng

- Dừng thực hiện khối lệnh setInterval

### 2.2 Cấu trúc

> myVarID = setInterval("javascript function", milliseconds);
> if([Condition]) { clearInterval(myVarID)}

    - Cần khai báo ID cho việc thực thi `setInterval` là `myVarID`
    - Khi gặp điều kiện nào đó, sẽ thực hiện dừng hành động `setInterval` bằng lệnh clearInterval(myVarID)

### 2.3 Ví dụ

- Hiển thị đếm số tăng dần sau mỗi 1s.
- Dừng hành động hiển thị này sau khi đếm đến 5.

```js
var i = 0;

var ID = setInterval(() => {
  i++;
  console.log(i);

  if (i == 5) {
    clearInterval(ID);
  }
}, 1000);
```

---

## 3. Bài tập

### 3.1 Bài tập 1

```js
/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {}

countDown(5);
```

- Giải bài tập

```js
function countDown(x) {
  var countID = setInterval(() => {
    console.log(x);
    x--;
    if (x < 0) {
      clearInterval(countID);
      console.log('Happy new year');
    }
  }, 1000);
}

countDown(5);
```

### 3.2 Bài tập 2

```js
/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {}

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);
```

- Giải bài tập

```js
function countDown(x) {
  return new Promise((resolve, reject) => {
    var ID = setInterval(() => {
      if (x == 0) {
        clearInterval(ID);
        return resolve(x);
      }
      console.log(x);
      x--;
    }, 1000);
  });
}
```

### 3.3 Bài tập 3

```js
/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {}

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);
```
