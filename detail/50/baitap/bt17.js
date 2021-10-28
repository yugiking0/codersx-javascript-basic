/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
function maxOfSumChain(arr, k) {
  arr = arr.sort();
  var sum = 0;
  for (var i = 1; i <= k; i++) {
    sum += arr[arr.length - i];
  }
  return sum;
}

console.log(maxOfSumChain([1, 3, 2, 6, 2], 3));
