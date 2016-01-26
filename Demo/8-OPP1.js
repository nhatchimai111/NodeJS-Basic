/*Khai báo class thông qua biến*/

var person = {

	// Thuộc tính
	ho : "Ta", 
	ten : "Tho",

	// Phương thức, mặc định như static
	chaomung : function(){

		console.log("Chao mung " + this.ho + " " + this.ten);
	}
}

// Gọi phương thức thông qua biến person
person.chaomung();

// Gọi thuộc tính
console.log(person["ten"]);

// Gọi thuộc tính
console.log(person.ten);