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
