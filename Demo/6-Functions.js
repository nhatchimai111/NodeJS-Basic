/*Khai báo function truyền vào tham số và có giá trị trả về******************************************/
function TinhTong(a, b){

	return a + b;
}

// Hứng giá trị trả về
var tong = TinhTong(5, 7);

console.log("tong = " + tong) ;
/*****************************************************************************************************/

/*Gọi hàm thông qua 1 function khác*******************************************************************/
// Khai báo function không có tham số truyền vào và kiểu dữ liệu trả về là kiểu void
function Hello(){

	console.log("Welcome to NodeJS");
}

// Khai báo function với tham số truyền vào là 1 function khác và kiểu dữ liệu trả về là kiểu void
function GoiHam(ham){

	// Gọi function vừa truyền vào từ tham số
	ham();
}

// Gọi function và truyền vào 1 function khác 
GoiHam(Hello);
/*****************************************************************************************************/

/*Khai báo biến là 1 hàm******************************************************************************/
var tong = function(){

	console.log("Lap trinh NodeJS");
}

// Gọi hàm thông qua biến tong
tong();
/*****************************************************************************************************/