// Gọi module express
 var express = require("express");

// Tạo biến hứng express
 var app = express();

// Gọi module http và tạo server express từ biến app
 var server = require("http").createServer(app);

// Server lắng nghe port 3000
 server.listen(3000);

/*
"/" : Địa chỉ của trang web sẽ đến, 
function(req, res) : Hàm được gọi khi đến trang web.
 */
 app.get("/", function(req, res){

 	// Trả về khách hàng chuỗi Hello Express
 	// res.send("<font color=blue size=100px>Hello Express</font>")
 	
 	// Gửi file .html khi port được truy cập
 	res.sendFile(__dirname + "/index.html");
 });

/*
Routing trong NodeJS, có bao nhiêu trang web, thì có bấy nhiêu hàm get()
"/gioithieu.aspx" : Địa chỉ của trang web sẽ đến, 
function(req, res) : Hàm được gọi khi đến trang web.
 */
app.get("/gioithieu.aspx", function(req, res){

	// Trả về khách hàng chuỗi Giới thiệu ASPX
	res.send("Giới thiệu ASPX");
});


/*
"/tinhtong/:so1/:so2" : Địa chỉ của trang web sẽ đến, :so1 và :so2 là tham số truyền vào
function(req, res) : Hàm được gọi khi đến trang web.
 */
 app.get("/tinhtong/:so1/:so2", function(req, res){

 	// Lấy tham số từ đường dẫn
 	var n = req.params.so1;

 	// Ép kiểu chuỗi thành kiểu int
 	n = parseInt(n);

 	var m = req.params.so2;
 	m = parseInt(m);

 	var tong = n + m;

 	// Trả về khách hàng chuỗi Hello Express
 	res.send("<h1>Kết quả = " + tong + "<h1>");
 	
 	
 });