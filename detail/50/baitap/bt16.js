/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
  var group = [];
  var n = 1;
  return arr.reduce((newArr, e, index, arr) => {
    if (n !== size) {
      n++;
      if (e !== 'undefined') {
        group.push(e);
      }
      if (index === arr.length - 1 && group != []) {
        newArr.push(group);
      }
    } else {
      if (e !== 'undefined') {
        group.push(e);
      }
      newArr.push(group);
      n = 1;
      group = [];
    }

    return newArr;
  }, []);
}

// chunkArrayInGroups(['a', 'b', 'c', 'd', 'e'], 2); // [["a", "b"], ["c", "d"], ["e"]]
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
