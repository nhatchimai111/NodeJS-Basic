// Gọi module http để có thể giao tiếp với browser qua giao thức http
var http = require("http");

/*
Tạo 1 con Server
req : request khách hàng gởi lên
res : resource - dữ liệu trả về khách hàng
*/
http.createServer(function(req, res){

	/*
	Hiển thị lên browser
	200 - là mã truyền về cho máy khách hàng
	"Content-Type" : "text/plain" - kiểu dữ liệu trả về khách hàng là kiểu chuỗi
	*/

	res.writeHead("200", {"Content-Type" : "text/plain"});

	// Dữ liệu trả vể khi browser truy cập port 8888
	res.end("KhoaPham.Vn");

}).listen(8888); // Lắng nghe port 8888 - Ctrl + C để ngắt kết nối Server