# setTimeout và clearTimeout

---

## 1. Tìm hiểu setTimeout

### 1.1 Chức năng

- Câu lệnh bất đồng bộ
- Xử lý khối lệnh sau khi hết thời gian

### 1.2 Cấu trúc

> setTimeout(fn,countTimer)

    - `countTimer`: Khoảng thời gian chờ đếm ngược, đơn vị tính ms(miliseconds)
    - `fn`: Hàm khối lệnh thực hiện sau khi countTimer đếm về 0.

### 1.3 Ví dụ 1

- Sau khi chờ 1 giây (1000ms) sẽ hiển thị log `Hello`

```js
setTimeout(() => {
  console.log('Hello!');
}, 1000);
```

- Hoặc viết lại truyền vào 1 Hàm

```js
let logHello = () => console.log('Hello!');
setTimeout(logHello, 1000);
```

- Hoặc

```js
let logHello = (str) => console.log(str);
setTimeout(() => logHello('Hello!'), 1000);
```

### 1.4 Ví dụ 2

- Sau 3 giây sẽ in ra `Finish!`.

```js
console.log('Begin');
console.log('End');
setTimeout(() => {
  console.log('Finish!');
}, 3000);
```

- Như vậy khối lệnh trong setTimeout được khởi tạo và thực hiện ở background, sau 3s sẽ tiến hành chạy.
- Nếu muốn hủy bỏ không thực thi hoàn tất khối lệnh setTimeout ta sẽ sử dụng lệnh clearTimeout.

## 2. Tìm hiểu clearTimeout

### 1.1 Chức năng

- Hủy xử lý khối lệnh setTimeout đang chạy ngầm ở background

### 1.2 Cấu trúc

> clearTimeout(setTimeoutID)

    - Cần xác định ID của khối lệnh setTimeout đang chạy ngầm.

### 1.3 Ví dụ

- Quay lại ví dụ trên để hủy thực hiện in `Finish` sau 3s từ setTimeout ở trên ta thực hiện

```js
console.log('Begin');
console.log('End');
var logID = setTimeout(() => {
  console.log('Finish!');
}, 3000);

clearTimeout(logID);
```

- Câu lệnh này xóa bỏ hoàn toàn setTimeout và không cần chờ 3s để hoàn tất.
- Ngoài ra ta có thể xóa bỏ các lệnh ở khối lệnh setTimeout bằng, với câu lệnh này thì vẫn có tắt vụ chạy ngầm background và con trỏ vẫn chờ 3s nhưng sẽ không thực hiện khối lệnh.

```js
console.log('Begin');
console.log('End');
var logID = setTimeout(() => {
  console.log('Finish!');
}, 3000);

clearImmediate(logID);
```

## 3. Bài tập

### 3.1 Bài tập 1

```js
/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */
```

### 3.2 Bài tập 2

```js
/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms VÀ trả về 1 promise để có thể gọi như sau
 */
function doAfter() {}

function sayHello() {
  console.log('Hello');
}

function sayGoodbye() {
  console.log('Goodbye');
}

doAfter(sayHello, 1000).then(sayGoodbye);
// Expect:
// Đợi 1s
// Hello
// Goodbye
```
