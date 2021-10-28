// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
  var result = str[0].toLocaleUpperCase();
  for (var i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result = result.concat(str[i].toLocaleUpperCase());
    } else {
      result = result.concat(str[i]);
    }
  }
  return result;
}

console.log(capitalize('cong hoa xa hoi chu nghia'));
