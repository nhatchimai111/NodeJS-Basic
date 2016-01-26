/*Bất kỳ đối tượng nào cũng có thể chuyển thành Buffer*/

// String --> Buffer - Chuyển chuỗi Hello thành Buffer định dạng utf-8
var buffer = new Buffer("Hello", "utf-8");
console.log(buffer);

// Buffer --> String - Chuyển buffer thành chuỗi
console.log(buffer.toString());

// Buffer -> JSON - Chuyển buffer thành JSON - Khi thành JSON ta có thể truyền qua Internet
console.log(buffer.toJSON());