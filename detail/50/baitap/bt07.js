//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str) {
  var sum_p = 0;
  var sum_t = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'p') {
      sum_p++;
    }
    if (str[i] === 't') {
      sum_t++;
    }
  }
  if (sum_p === sum_t) {
    return true;
  } else {
    return false;
  }
}

console.log(equal_pt('paatpsts'));
