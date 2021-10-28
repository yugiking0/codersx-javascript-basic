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
