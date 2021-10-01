# THE `NEW` KEYWORD

### Ví dụ

```js
var today = new Date();

console.log(today); // Tue Nov 23 2020 09:19:11 GMT+0700 (Indochina Time)
```

- Create new object, object literal (Bằng chữ: Thủ công, bằng tay)

```js
var mouse = {
  weight: 0.2,
  color: 'black',
};

console.log(mouse);
```

- Thêm 1 đối tượng `mouse1` bằng `mouse`

```js
var mouse = {
  weight: 0.2,
  color: 'black',
};

console.log('mouse : ', mouse); // mouse : {weight: 0.2, color: "black"}
var mouse1 = mouse;

console.log('mouse1: ', mouse1); // mouse1:  {weight: 0.2, color: "black"}

mouse.color = 'white'; // Change color.

console.log('mouse: ', mouse); // mouse:  {weight: 0.2, color: "white"}
console.log('mouse1: ', mouse1); // mouse1:  {weight: 0.2, color: "white"}

// Với cách này khi đổi thuộc tính đối tượng mouse sẽ làm mouse1 đổi theo.
```

![mouse1](./images/001.png 'Object mouse1')

- Hoặc gán ngược lại:

```js
// Declare object
var mouse = {
  weight: 0.2,
  color: 'black',
};

console.log('mouse : ', mouse); // mouse : {weight: 0.2, color: "black"}
var mouse1 = mouse;

console.log('mouse1: ', mouse1); // mouse1:  {weight: 0.2, color: "black"}

mouse1.color = 'white'; // Change color.

console.log('mouse: ', mouse); // mouse:  {weight: 0.2, color: "white"}
console.log('mouse1: ', mouse1); // mouse1:  {weight: 0.2, color: "white"}
```

![mouse1](./images/003.png 'Object mouse1')

- Nguyên nhân khi gán đối tượng kiểu này sẽ được hiểu các đối tượng cùng chỉ định về cùng 1 ô bộ nhớ khai báo, nên khi bất kỳ một đối tượng nào thay đổi thuộc tính nào đó, sẽ dẫn đến các đối tượng khác cũng bị thay đổi theo.

- Để khắc phục thì dùng `Constructor Function` để tạo.

> Ôn lại kiếm thức

```js
var mouse = {
  weight: 0.2,
  color: 'black',
  getColor: function () {
    console.log(this.color); // this as object mouse
  },
};

mouse.getColor(); // black
```

- Ta có cấu trúc áp dụng tạo 1 `Constructor Function` như sau:

```js
// Constructor Function
function Mouse() {
  this.type = 'mouse';
  this.color = 'black';
}
```

```js
// Constructor Function
function Mouse(name, color) {
  this.name = name;
  this.color = 'black';
}
var mouse1 = new Mouse();
var mouse2 = new Mouse();

console.log('mouse1:', mouse1);
console.log('mouse2:', mouse2);

mouse1.color = 'white';

console.log('mouse1:', mouse1);
console.log('mouse2:', mouse2);
```

![mouse1](./images/004.png 'Object mouse1')

- So sánh gán kiểu Object thường và kiểu `Constructor Function`

```js
function Mouse() {
  this.type = 'mouse';
  this.color = 'black';
}
var mouse1 = new Mouse();
var mouse2 = { type: 'mouse', color: 'black' };

console.log(mouse1); // Mouse {type: "mouse", color: "black"}
console.log(mouse2); //       {type: "mouse", color: "black"}
```

![mouse1](./images/002.png 'Object mouse1')

- Kiểu gán `Constructor Function` sẽ có thêm kiểu Object ở phía trước.
- Với `Constructor Function` được hiểu như Function nên có thể truyền thêm các Parameter - Đối số như Function thường như sau:

```js
// Constructor Function
function Mouse(name, color) {
  this.name = name;
  this.color = color;
}
var mouse1 = new Mouse('Jerry', 'orange');
var mouse2 = new Mouse('Mickey', 'Black');

console.log('mouse1:', mouse1);
console.log('mouse2:', mouse2);
```

![mouse1](./images/005.png 'Object mouse1')

## Lợi ích của việc dùng Constructor Function

- Khi muốn thay đổi thuộc tính, thêm hay bỏ bớt thuộc tính thì chỉ cần khai báo 1 chỗ ở `Constructor Function` không cần phải vào từng đối tượng để thêm.

![mouse1](./images/006.png 'Object mouse1')
![mouse1](./images/007.png 'Object mouse1')

---

## Bài tập

### Bài 1

> Bài toán : Cat eat Mouse theo Object như sau:

```js
var Tom = {
  name: 'Tom',
  stomach: [],
  eat: function (mouse) {
    this.stomach.push(mouse);
    return this; // Lưu ý: có return this để dùng method chaining
  },
};

var m1 = { name: 'm1' };
var m2 = { name: 'm2' };
var m3 = { name: 'm3' };

Tom.eat(m1).eat(m2).eat(m3); // method chaining gọi nhiều lần thuộc tính.

console.log(Tom);
```

![Tom eat](./images/008.png 'Cat eat Mouse')
![Tom eat](./images/009.png 'Cat eat Mouse')

- Áp dụng bài toán khi sử dụng **_`Constructor Function`_**

```js
// Constructor Function
var Tom = {
  name: 'Tom',
  stomach: [],
  eat: function (mouse) {
    this.stomach.push(mouse);
    mouse.isEat();
    return this; // Lưu ý: có return this để dùng method chaining
  },
};

function Mouse(name, color) {
  this.name = name;
  this.color = color;
  this.status = 'alive';
  this.isEat = function () {
    this.status = 'die';
  };
}

var m1 = new Mouse('m1', 'black');
var m2 = new Mouse('m2', 'white');
var m3 = new Mouse('m3', 'blue');

Tom.eat(m1).eat(m2).eat(m3);

console.log(Tom);
```

![Tom eat](./images/010.png 'Cat eat Mouse')

---
