// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b) {
  return Math.abs(a - 100) < Math.abs(b - 100) ? a : b;
}
