var dog = document.getElementById('dog');
var meo = document.getElementById('meo');
function changeImg(){
	dog.src = "anh2.jpeg";
}
function changeImg2(){
	dog.src = "anh1.jpg";
}
function bai2 (){
	meo.src = "meo2.jpg";
}
function bai3 (){
	document.body.style.backgroundColor = "blue";
}



///////
var num = 0;
var anh = [
	"anh1.jpg",
	"anh2.jpeg",
	"cho.jpeg",
	"meo.jpg",
	"meo2.jpg",
	];
var text = [
	"anh1",
	"anh2",
	"anh3",
	"anh4",
	"anh5",
]
document.getElementById('slide').src = anh[0];
document.getElementById('text').innerText = text[0];
function pre() {
	num--
	if(num<0){
		num = anh.length-1;
	}
	document.getElementById('slide').src = anh[num];
	document.getElementById('text').innerText = text[num];
}
function next() {
	num++
	if(num>anh.length-1){
		num = 0;
	}
	document.getElementById('slide').src = anh[num];
	document.getElementById('text').innerText = text[num];
}