var str = '123456789abcde';
var c = 'a';

var i = str.find((x) => {
  return x === c;
});

console.log(i);
