function findMostFrequent(arr) {
  let newArr = arr.reduce(function (sumOf, item) {
    var i = sumOf.map((x) => x[0]).find((x) => x == item); // Xác định index của item đã có trong mảng

    if (!i) {
      sumOf.push([item, 1]);
    } else {
      sumOf[i - 1][1]++;
    }
    return sumOf;
  }, []);

  newArr = newArr.sort((a, b) => {
    return b[1] - a[1];
  });
  console.log(newArr);
  var max = newArr[0][1];
  var result = newArr.filter((item) => item[1] >= max).map((item) => item[0]);
  return result;
}
// console.log(findMostFrequent([5, 1, 2, 3, 4, 1, 2, 2, 1, 4]));
console.log(findMostFrequent([1, 2, 3, 4, 1, 2, 2]));
