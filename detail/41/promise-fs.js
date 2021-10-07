var fs = require('promise-fs');

fs.readFile('../docs/test1.txt', { encoding: 'utf8' })
  .then((res1) => {
    console.log(res1);
    return fs.readFile('../docs/test2.txt', { encoding: 'utf8' });
  })
  .then((res2) => console.log(res2))
  .catch((error) => console.log(error));

// ===================================

fs.readFile('../docs/test1.txt', { encoding: 'utf8' })
  .then((res1) => console.log(res1))
  .then(() => fs.readFile('../docs/test2.txt', { encoding: 'utf8' }))
  .then((res2) => console.log(res2))
  .catch((error) => console.log(error));
