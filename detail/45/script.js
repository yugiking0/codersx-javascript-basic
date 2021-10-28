console.log('Begin');
console.log('End');
var logID = setTimeout(() => {
  console.log('Finish!');
}, 3000);

clearImmediate(logID);
clearTimeout(logID);
