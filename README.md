# Khóa JavaScript Basic

Bao gồm các nội dung

## Phần 01 : Giới thiệu

### Bài 001: Lời khuyên trước khóa học

- Xem [Lời khuyên trước khóa học](./detail/phan01-001/index.md)

### Bài 002: Cài đặt môi trường

- Cài trình duyệt Browser Chrome
- Code Editor `VS Code` + Extension `Liver Server`

---

## Phần 02 : Giới thiệu

### Bài 003: Sử dụng Javascript với HTML

- Xem [Sử dụng Javascript với HTML](./detail/phan02-003/index.md)

### Bài 004: Sử dụng Javascript với HTML

- Xem [Sử dụng Javascript với HTML](./detail/phan02-004/index.md)

### Bài 005: Biến và khai báo biến

- Xem [Biến và khai báo biến](./detail/phan02-005/index.md)

### Bài 006: Gán giá trị cho biến

- Xem [Gán giá trị cho biến](./detail/phan02-006/index.md)

### Bài 007: Học về biến qua video

- Xem [Học về biến qua video](./detail/phan02-007/index.md)

### Bài 008: Test tính cẩn thận, chỉn chu của bạn

- Xem [Test tính cẩn thận, chỉn chu của bạn](./detail/phan02-008/index.md)

### Bài 009: Cú pháp comments

- Xem [Cú pháp comments](./detail/phan02-009/index.md)

### Bài 010: Học comments qua video

- Xem [Học comments qua video](./detail/phan02-010/index.md)

### Bài 011: Một số hàm built-in

- Xem [Một số hàm built-in](./detail/phan02-011/index.md)

  - alert
  - console
  - confirm
  - prompt
  - setTimeOut
  - setInterval

<!-- prettier-ignore -->
### Bài 012: Làm quen với toán tử

- Xem [Làm quen với toán tử](./detail/phan02-012/index.md)

### Bài 013: Lưu ý khi làm bài tập

- Xem [Lưu ý khi làm bài tập](./detail/phan02-013/index.md)

### Bài 014: Toán tử số học

- Xem [Toán tử số học](./detail/phan02-014/index.md)

### Bài 015: Toán tử ++ -- với tiền tố & hậu tố

- Xem [Toán tử ++ -- với tiền tố & hậu tố](./detail/phan02-015/index.md)

### Bài 024: Truthy và Falsy

- Xem [Truthy và Falsy](./detail/phan02-024/index.md)

<!-- ![Console](./images/001.png "Console") -->
<!-- <img src="./images/001.png" alt="JAVASCRIPT VỚI HTML" width="400px"/> -->

## Phần 03 : Kiến thức cốt lỗi (Phần 1)

### Bài 027: Làm việc với chuỗi

- Xem [Làm việc với chuỗi](./detail/phan03-027/index.md)

### Bài 031: Làm việc với mảng

- Xem [Làm việc với mảng](./detail/phan03-031/index.md)

### Bài 038: Object - Đối tượng.

- Xem [Object](./detail/phan03-038/index.md)

### Bài 039: Object Construction - Thiết kế đối tượng.

- Xem [Object](./detail/phan03-039/index.md)

### Bài 040: Object Prototype - Thuộc tính nguyên mẫu.

- Xem [Object Prototype](./detail/phan03-040/index.md)

### Bài 042: Lệnh rẽ nhánh If else

- Xem [Lệnh rẽ nhánh If else](./detail/phan03-042/index.md)

### Bài 043: Lệnh rẽ nhánh Switch

- Xem [Lệnh rẽ nhánh Switch](./detail/phan03-043/index.md)

<!-- prettier-ignore -->
```js
var date = 9;

switch (date) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log('Weekday');
    break;
  case 7:
  case 8:
    console.log('Weekend');
    break;
  default:
    console.log('Undefined day');
}
```

### Bài 044: Toán tử 3 ngôi (Ternary operator)

- Xem [Toán tử 3 ngôi (Ternary operator)](./detail/phan03-044/index.md)
  > [Điều kiện] ? [Biểu thức nếu đúng] : [Biểu thức nếu sai]

### Bài 045: Giới thiệu vòng lặp - Loop

- Xem [Giới thiệu vòng lặp - Loop](./detail/phan03-045/index.md)

  **Vòng lặp - Loop**

  - for : Vòng lặp với điều kiện đúng
  - for/in : Vòng lặp qua key của đối tượng (LOI-Loop Object In)
  - for/of : Vòng lặp qua value của đối tượng
  - while : Lặp khi điều kiện đúng.
  - do/while : Thực hiện 1 lần, sau đó lặp khi điều kiện đúng.

### Bài 046: Vòng lặp for()

- Xem [Vòng lặp for](./detail/phan03-046/index.md)

```js
// Print Log 100 line
for(var i = 1; i<= 100; i++>){
  console.log(`Line ${i}`);
}
```

```js
// prettier-ignore
var arr =[
  "Javascript",
  "CSS",
  "Html",
  "Java",
  "Python"
]
var arrLength = arr.length; // Tạo biến ngoài để tối ưu hơn
for (var i = 0; i < arrLength; i++) {
  console.log(arr[i]);
}
```

### Bài 049: Vòng lặp for/in

- Xem [Vòng lặp for/in](./detail/phan03-049/index.md)
  - for/in dùng cho _Object_
  - for/in dùng cho _Array_
  - for/in dùng cho _String_

```js
// Loop for/in => Object
var myInfo = {
  firstName: "Dinh",
  lastName: "Quang Duy",
  birthYear: 1985,
  address: "Đà Nẵng",
  country: "Việt Nam",
};

for (var key in myInfo) {
  console.log(key, myInfo[key]);
}
```

```js
// Loop for/in => Array
var arr = ["Javascript", "CSS", "Html", "Java", "Python"];

for (var key in arr) {
  console.log(arr[key]);
}
```

```js
// Loop for/in => String
var myString = "Javascript";

// myString[0]// J
for (var i in myString) {
  console.log(myString[i]);
}
```

<!-- ![Console](./images/001.png "Console") -->
<!-- <img src="./images/001.png" alt="JAVASCRIPT VỚI HTML" width="400px"/> -->

### Bài 050: Vòng lặp for/of

- Xem [Vòng lặp for/of](./detail/phan03-050/index.md)

Cộng hòa xã hội chủ nghĩa Việt Nam
git add .

Tai sao không thay đổi Readme chỗ này.
