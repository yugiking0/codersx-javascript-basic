# Callback Hell

---

# 1. Xem các ví dụ:

> Viết chương trình đọc các file `testX.txt` ở `docs`.

- Nếu viết kiểu Synchronous đọc tuần tự sẽ dẫn đến vấn đề nếu lỗi không xác định đường dẫn file sẽ làm chương trình dừng lại tại vị trí sai đường dẫn.

```js
const fs = require('fs');

//? Synchronous: readFileSyn
console.log('Begin');
var data1 = fs.readFileSync('./detail/docs/test1.txt', { encoding: 'utf-8' });
console.log('Noi dung 1: ', data1);
var data2 = fs.readFileSync('./detail/docs/test2.txt', { encoding: 'utf-8' });
console.log('Noi dung 2: ', data2);
var data3 = fs.readFileSync('./detail/docs/test3.txt', { encoding: 'utf-8' });
console.log('Noi dung 3: ', data3);
console.log('End');
```

![Synchronous](./images/001.png 'Synchronous')

- Trường hợp nếu bị lỗi ở file test23.txt ở vị trí 2, thì sẽ bị lỗi dừng ở vị trí 2 và không đọc tiếp theo các file tiếp theo được.

```js
//? Synchronous: readFileSyn
console.log('Begin');
var data1 = fs.readFileSync('./detail/docs/test1.txt', { encoding: 'utf-8' });
console.log('Noi dung 1: ', data1);
var data2 = fs.readFileSync('./detail/docs/test23.txt', { encoding: 'utf-8' });
console.log('Noi dung 2: ', data2);
var data3 = fs.readFileSync('./detail/docs/test3.txt', { encoding: 'utf-8' });
console.log('Noi dung 3: ', data3);
console.log('End');
```

![Error Synchronous](./images/002.png 'Error Synchronous')

- Để hạn chế việc bị dừng khi load dữ liệu khi gặp lỗi và bảo đảm các mục khác vẫn chạy được thì ta sử dụng chức năng `Asynchronous` - Bất đồng bộ là `readFile` để đọc như sau:

```js
console.log('Begin');
// prettier-ignore
fs.readFile(
  './detail/docs/test1.txt', { encoding: 'utf-8' }, (error, data1) => {
    console.log('Noi dung 1: ', data1);
  }
);
// prettier-ignore
fs.readFile(
  './detail/docs/test23.txt', { encoding: 'utf-8' }, (error, data2) => {
    if(error) {
      return console.log('Sai đường dẫn File test23.txt');
    }
    console.log('Noi dung 2: ', data2);
  }
);
// prettier-ignore
fs.readFile(
  './detail/docs/test3.txt', { encoding: 'utf-8' }, (error, data3) => {
    console.log('Noi dung 3: ', data3);
  }
);
console.log('End');
```

![Error Asynchronous](./images/003.png 'Error Asynchronous')

- Hoặc viết kiểu lồng như sau:

```js
const fs = require('fs');
//? Asynchronous: readFile
// prettier-ignore
fs.readFile('./detail/docs/test1.txt', { encoding: 'utf-8' }, (error, data1) => {
    if(error) {
      console.log('Sai đường dẫn File test1.txt');
    } else{
      console.log('Noi dung 1: ', data1);
      fs.readFile('./detail/docs/test23.txt', { encoding: 'utf-8' }, (error2, data2) => {
        if(error2) {
          console.log('Sai đường dẫn File test23.txt');
        } else{ 
          fs.readFile('./detail/docs/test3.txt', { encoding: 'utf-8' }, (error3, data3) => {
            if(error) {
              console.log('Sai đường dẫn File test3.txt');
            } else{
              console.log('Noi dung 3: ', data3);
          }
        });
        }
      });
    }
  }
);
```

- Hoặc viết ngắn lại không check lỗi thì sẽ là:

```js
const fs = require('fs');
//? Asynchronous: readFile
// prettier-ignore
fs.readFile('./detail/docs/test1.txt', { encoding: 'utf-8' }, (error, data1) => {
    console.log('Noi dung 1: ', data1);
    fs.readFile('./detail/docs/test23.txt', { encoding: 'utf-8' }, (error2, data2) => {
      console.log('Noi dung 2: ', data2);
      fs.readFile('./detail/docs/test3.txt', { encoding: 'utf-8' }, (error3, data3) => {
          console.log('Noi dung 3: ', data3);
        }
      );
    }
  );
});
```

- Ta nhìn thấy các câu lệnh bị lồng nhau thành nhiều tầng và lớp, rất khó khi chỉnh sửa hay thêm 1 câu lệnh nào đó bổ sung sẽ dễ sai xót các dấu ngoặc nhọn hoặc dấu ngoặc tròn dẫn đến câu lệnh bị sai, nếu tăng số lượng các file cần đọc lên nhiều 10, 100, 1000,... thì việc điều chỉnh những câu lệnh này sẽ rất khó khăn và dễ sai xót dẫn đến lỗi.

---

# 2. Nhận diện Callback Hell

![Callback Hell](./images/hell03.png 'Callback Hell 3')

- Khi nhìn vào các dòng code được viết có các kiểu như:

```js
function a1() {
  function a2() {
    function a3() {
      function a4() {
        function a5() {
          ...
        }
      }
    }
  }
}
```

hay

```js
if(a1){
  if(a2){
    if(a3){
      if(a4){
        if(a5){
          ...
        }
      }
    }
  }
}
```

hoặc

```js
for(a1...){
  for(a2...){
    for(a3...){
      for(a4...){
        for(a5...){
          ...
        }
      }
    }
  }
}

```

- Các cấu trúc có dạng kim tự tháp nhọn ra dần nhiều tầng như các kiểu trên thì ta gọi đó là Callback Hell.
  ![Callback Hell](./images/hell01.png 'Callback Hell 1')
  ![Callback Hell](./images/hell02.png 'Callback Hell 2')

  ![Callback Hell](./images/hell04.png 'Callback Hell 4')
  ![Callback Hell](./images/hell05.png 'Callback Hell 5')
  ![Callback Hell](./images/hell06.png 'Callback Hell 6')

---

# 3. Khắc phục Callback Hell

- Xem [Các cách khắc phục Callback Hell trong Javascript](resolve-callback-hell.md)
- Trong các cách khắc phục Callback Hell thì ta sẽ xem xét chi tiết cách khắc phục bằng `Promise` ở bài sau.

---
