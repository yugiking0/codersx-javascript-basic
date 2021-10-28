/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
var books = [
  { bookID: '0001', title: 'Toi di hoc' },
  { bookID: '0002', title: 'Marketing co ban' },
  { bookID: '0003', title: 'Lap trinh C++' },
  { bookID: '0004', title: 'Khong gia dinh' },
  { bookID: '0005', title: 'Learn Javascrip Basic' },
  { bookID: '0006', title: 'Giai thuat' },
  { bookID: '0007', title: 'Kinh te dai cuong' },
  { bookID: '0008', title: 'Toan cao cap' },
  { bookID: '0009', title: 'Learn Javascrip Basic' },
  { bookID: '0010', title: 'Toan cap cap' },
  { bookID: '0011', title: 'TMarketing co ban' },
  { bookID: '0012', title: 'Giai thuat' },
  { bookID: '0013', title: 'Tu dien tieng Anh' },
  { bookID: '0015', title: 'Van hoc Viet Nam' },
  { bookID: '0016', title: 'Doi thua - Nam Cao' },
  { bookID: '0017', title: 'Co hoc tinh hoa' },
  { bookID: '0018', title: 'Giao trinh triet hoc' },
  { bookID: '0019', title: 'Giao trinh triet hoc' },
  { bookID: '0020', title: 'Giao trinh kinh te hoc' },
];

var shelfLocation = [
  { locID: 'A001', bookID: '0011' },
  { locID: 'A002', bookID: '0002' },
  { locID: 'A003', bookID: '0013' },
  { locID: 'A004', bookID: '' },
  { locID: 'A005', bookID: '' },
  { locID: 'A006', bookID: '0019' },
  { locID: 'A007', bookID: '' },
  { locID: 'B001', bookID: '0004' },
  { locID: 'B002', bookID: '0005' },
  { locID: 'B003', bookID: '0006' },
  { locID: 'B004', bookID: '0007' },
  { locID: 'B005', bookID: '' },
  { locID: 'B006', bookID: '' },
  { locID: 'B007', bookID: '0009' },
];

var users = [
  { userID: '0001', name: 'Minh', created: '2020/01/10' },
  { userID: '0002', name: 'Anh Khoa', created: '2020/07/12' },
  { userID: '0003', name: 'Hung', created: '2021/01/07' },
  { userID: '0004', name: 'Minh', created: '2021/11/11' },
  { userID: '0005', name: 'Minh', created: '2020/01/10' },
  { userID: '0006', name: 'Huong', created: '2020/01/10' },
  { userID: '0007', name: 'Hoa', created: '2021/01/10' },
  { userID: '0008', name: 'Tram', created: '2021/01/10' },
];

//prettier-ignore
var transactionLog = [
  {cardID: '00001',  userID: '0001',dateBorrow: '2021/10/12',bookID: '0008', dueDate: '2021/10/15', datePaid: '', status: 'Borrow'},
  {cardID: '00001',  userID: '0001',dateBorrow: '2021/10/12',bookID: '0002', dueDate: '2021/10/20', datePaid: '2021/10/22', status: 'Completed'},
  {cardID: '00001',  userID: '0001',dateBorrow: '2021/10/15',bookID: '0010', dueDate: '2021/10/28', datePaid: '', status: 'Borrow'},
  {cardID: '00001',  userID: '0001',dateBorrow: '2021/10/17',bookID: '0001', dueDate: '2021/10/23', datePaid: '', status: 'Borrow'},

  {cardID: '00002',  userID: '0002',dateBorrow: '2021/09/10',bookID: '0001', dueDate: '2021/10/15', datePaid: '2021/10/16', status: 'Completed'},
  {cardID: '00002',  userID: '0002',dateBorrow: '2021/10/02',bookID: '0003', dueDate: '2021/10/07', datePaid: '2021/10/04', status: 'Completed'},
  {cardID: '00002',  userID: '0002',dateBorrow: '2021/10/12',bookID: '0012', dueDate: '2021/10/20', datePaid: '', status: 'Borrow'},

  {cardID: '00003',  userID: '0003',dateBorrow: '2021/10/12',bookID: '0014', dueDate: '2021/10/18', datePaid: '', status: 'Borrow'},

  {cardID: '00004',  userID: '0004',dateBorrow: '2021/10/12',bookID: '0015', dueDate: '2021/10/16', datePaid: '', status: 'Borrow'},

  {cardID: '00007',  userID: '0007',dateBorrow: '2021/09/09',bookID: '0016', dueDate: '2021/09/24', datePaid: '', status: 'Borrow'},
  {cardID: '00007',  userID: '0007',dateBorrow: '2021/09/23',bookID: '0020', dueDate: '2021/10/20', datePaid: '', status: 'Borrow'},

  {cardID: '00005',  userID: '0005',dateBorrow: '2021/10/14',bookID: '0001', dueDate: '2021/10/29', datePaid: '2021/10/17', status: 'Completed'},

  {cardID: '00006',  userID: '0006',dateBorrow: '2021/09/07',bookID: '0019', dueDate: '2021/09/19', datePaid: '2021/09/25', status: 'Completed'},
];

//Function search

function bookAvailable(books) {
  var listBook = shelfLocation.filter((book) => book.bookID != '');
  var arr = [];
  books.filter((book) => {
    listBook.forEach((x) => {
      if (x.bookID == book.bookID) {
        arr.push(book);
      }
    });
  });
  return arr;
}
// console.table(bookAvailable(books));

function userBorrow(user) {
  return transactionLog.filter((x) => {
    return x.userID == user;
    // console.log(x);
  });
}

// console.table(userBorrow('0005'));

function diff(fromDate) {
  var fromDate = new Date(fromDate);
  var toDate = new Date(Date.now());
  var result = Math.round((toDate - fromDate) / (1000 * 60 * 24 * 60), 0);
  return result > 0 ? result : 0;
}
function callOverTime(user) {
  // console.log(diff(user.dueDate));
  var data = transactionLog.filter((x) => {
    return x.userID == user && x.status == 'Borrow';
  });
  data.forEach((x) => {
    x.overTime = diff(x.dueDate); // add column overTime
  });
  console.table(data);
  return data.reduce((sum, x) => {
    return (sum += x.overTime);
  }, 0);
}

console.log('Total days over Due Date: ', callOverTime('0001'));

function overTime() {
  // console.log(diff(user.dueDate));
  var data = transactionLog.filter((x) => {
    return x.status == 'Borrow';
  });
  data.forEach((x) => {
    x.overTime = diff(x.dueDate); // add column overTime
  });
  console.table(data);
}

overTime();
