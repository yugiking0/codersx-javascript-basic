/*
var i = 0;

var ID = setInterval(() => {
  i++;
  console.log(i);
  if (i == 5) {
    clearInterval(ID);
  }
}, 1000);
*/

/**
 * 1. Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
// function countDown(x) {
//   var countID = setInterval(() => {
//     console.log(x);

//     if (x == 0) {
//       clearInterval(countID);
//       console.log('Happy new year');
//     }
//     x--;
//   }, 1000);
// }

// countDown(5);

/**
 * 2. Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */

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

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);
