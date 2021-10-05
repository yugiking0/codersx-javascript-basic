// todo: Đọc file bằng readFile + Promise
const fs = require('fs');

var onDone = function (data) {
  return console.log('Du lieu: ' + data);
};

var onError = function (error) {
  console.log(error + '');
};

var readFile2 = (path) => {
  return new Promise((resolve, rejects) => {
    for (var i = 0; i < path.length; i++) {
      fs.readFile(path[i], { encoding: 'utf-8' }, (err, data) => {
        if (err) {
          return rejects(new Error(err));
        }
        return resolve(onDone(data));
      });
    }
  });
};

var path = [
  './detail/docs/test1.txt',
  './detail/docs/test12.txt',
  './detail/docs/test3.txt',
  './detail/docs/song21.txt',
  './detail/docs/song22.txt',
];
readFile2(path).then(onDone, onError);
