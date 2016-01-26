
/*Khai báo function dạng hướng đối tượng - prototype*/

// Tạo Contructor method
function KhoaHoc(ten, hocphi){

	this.Ten = ten;
	this.HocPhi = hocphi;
}

// Khai báo phương thức cho object
KhoaHoc.prototype.mota = function(){

	console.log("Hello " + this.Ten + " " + this.HocPhi);
}

// Hứng object
var nodejs = new KhoaHoc("Lap Trinh NodeJS ", 800000);

// Gọi method mota
nodejs.mota();

// Gọi thuộc tính
console.log(nodejs["Ten"]);

// Gọi thuộc tính
console.log(nodejs.Ten);