var fs = require('fs');
const path = require('path');

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

readFile('../docs/test1.txt')
  .then(onDone)
  .then(() => readFile('../docs/test2.txt'))
  .then(onDone)
  .then(() => readFile('../docs/test3.txt'))
  .then(onDone)
  .catch(onError);
