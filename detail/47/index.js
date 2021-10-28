var now = new Date();
console.log(now); // 2021-07-15T08:51:01.087Z

var myBirthday = new Date('1999-03-14');
console.log(myBirthday); // 1999-03-14T00:00:00.000Z

console.log(now.getTime()); // 1634291023067
console.log(myBirthday.getTime()); // 921369600000
