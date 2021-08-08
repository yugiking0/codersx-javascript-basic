# DÙNG FUNCTION NHƯ THAM SỐ (CALLBACK)

> Function as a parameter (Callback)
> Dùng function như một tham số Callback

_Ví dụ:_

```js
function Sum(a, b) {
  return a + b;
}

Sum(2, 3); // Parameter are numbers
```

- Thông thường Function có thể truyền vào parameter là: number, string, true, array, object...
- Ngoài ra thì có thể truyền vào một hàm -> Parameter là function thì sẽ gọi là Callback.

## 01. Function in Object

- Khai báo Object như sau:

```js
//Object
var coffeeMachine = {
  makeCoffee: function () {
    console.log("Making coffee...");
  },
};

console.log(coffeeMachine, typeof coffeeMachine);
coffeeMachine.makeCoffee();
```

- Muốn thực hiện công việc nào đó `onFinish` sau khi `Making Coffee` xong, gán vào đối tượng và truyền `Function` vào như `Parameter`

> Sau khi making Coffee xong sẽ báo Tít Tít

```js
//Object
var coffeeMachine = {
  makeCoffee: function (onFinish) {
    console.log("Making coffee...");
    onFinish();
  },
};

function doneCoffee() {
  console.log("Tít tít!!!");
}

coffeeMachine.makeCoffee(doneCoffee);
```

=> Khi truyền Hàm vào một hàm khác thì gọi là Callback.

```js
//Object
var coffeeMachine = {
  makeCoffee: function (onFinish) {
    console.log("Making coffee...");
    onFinish();
  },
};

function doneCoffee() {
  console.log("Tít tít!!!");
}
coffeeMachine.makeCoffee(doneCoffee);

//Viết trực tiếp vào
coffeeMachine.makeCoffee(function doneCoffee() {
  console.log("Bíp bíp.");
});
```

## Bài Tập

### Bài 01:

> - 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love Coders.Tokyo'
> - 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. Sau khi log xong, chạy hàm được truyền vào ở tham số
> - 3. Kiểm tra 2 hàm trên bằng cách:
>      countAndDo(sayHello)

```js
function sayHello() {
  console.log("I love Coders.Tokyo");
}

function countAndDo(callback) {
  for (let i = 1; i <= 10; i++) {
    callback();
  }
}

var a = countAndDo(sayHello);
console.log(a);
```

### Bài tập 02:

> - 1.  Viết hàm double nhận vào 1 số bất kì, trả về số đó nhân đôi
>       Vd: double(2) === 4
> - 2.  Viết hàm sumAndDo nhận vào 1 array và 1 callback function.Hàm sumAndDo làm nhiệm vụ tính tổng array đó, sau đó gọi callback function với tham số là kết quả tổng vừa tính
> - 3.  Nếu mảng trống trả về giá trị 0
>       Vd: sumAndDo([1, 2, 3], double) === 12

```js
function double(num) {
  return num * 2;
}

function sumAndDo(nums, callback) {
  let sum = 0;
  if (nums.length > 0) {
    for (let i in nums) {
      sum += callback(nums[i]);
    }
  }
  return sum;
}

console.log(sumAndDo([1, 2, 3, 4], double));
```

### Bài tập 03:

> 1.  Viết hàm transform nhận vào 1 array gồm các số và 1 function callback.
>     Nội dung của hàm bao gồm:
>
> - Khai báo 1 biến result có giá trị là 1 empty array
> - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, được kết quả bao nhiêu thì push vào array khai báo ở trên.
> - Trả về result array

```js
function transform(numbers, callback) {
  let result = [];
  for (let i in numbers) {
    result.push(callback(numbers[i]));
  }
  return result;
}

function double(num) {
  return 2 * num;
}

var a = transform([2, 4, 6, 8], double);
console.log(a);
```
