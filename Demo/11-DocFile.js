// Khai báo module "fs" có sẵn để làm việc với file
var fs = require("fs");

/*Đọc file
__dirname : là hằng số mà node có sẵn - đường dẫn mặc định
*/
var noidung = fs.readFileSync(__dirname + "/danhsach.txt");

// Lấy giá trị biến nội dung
console.log(noidung);

// Chuyển giá trị file vừa đọc sang kiểu chuỗi
console.log(noidung.toString());

