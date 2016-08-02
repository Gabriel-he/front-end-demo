// 获取需要控制颜色的区域
var clrChange1 = document.getElementById('clr-change1');
var clrChange2 = document.getElementById('clr-change2');
var clrChange3 = document.getElementById('clr-change3');
var clrChange4 = document.getElementById('clr-change4');
var clrChange5 = document.getElementById('clr-change5');
var clrChange6 = document.getElementById('clr-change6');
var clrChange7 = document.getElementById('clr-change7');
var clrChange8 = document.getElementById('clr-change8');
var clrChange9 = document.getElementById('clr-change9');
var clrChange10 = document.getElementById('clr-change10');
var clrChange11 = document.getElementById('clr-change11');
var clrChange12 = document.getElementById('clr-change12');
var clrChange13 = document.getElementById('clr-change13');
var clrChange14 = document.getElementById('clr-change14');
var clrChange15 = document.getElementById('clr-change15');

var btnCrimson = document.getElementById('crimson-btn');
var btnOrange = document.getElementById('orange-btn');
var btnGreen = document.getElementById('green-btn');
var btnBlue = document.getElementById('blue-btn');
var btnPurple = document.getElementById('purple-btn');
// localstorage键值对
var strKey = "themeColor"; 
var storage = window.localStorage;
//存储色彩方案
function storeColor(color){
	if(storage) {
		storage.setItem(strKey, color);   
    } else { 
        Cookie.write(strKey, color);
    }  
}
// 更换颜色
function changeColor(color) {
	clrChange1.style.borderTopColor = color;
	clrChange2.style.backgroundColor = color;
	clrChange3.style.color = color;
	clrChange4.style.color = color;
	clrChange4.style.borderTopColor = color;
	clrChange5.style.color = color;
	clrChange6.style.color = color;
	clrChange7.style.color = color;
	clrChange8.style.color = color;
	clrChange9.style.color = color;
	clrChange10.style.color = color;
	clrChange11.style.borderColor = color;
	clrChange12.style.borderColor = color;
	clrChange13.style.color = color;
	clrChange14.style.color = color;
	clrChange15.style.color = color;
	// body...
}
// 响应点击更换色彩主题
btnCrimson.onclick = function(){
	var color = "#DC143C";
	changeColor(color);
	storeColor(color);
};
btnOrange.onclick = function(){
	var color = "#FFA500";
	changeColor(color);
	storeColor(color);
};
btnGreen.onclick = function(){
	var color = "#0AA770";
	changeColor(color);
	storeColor(color);
	storeColor(color);
};
btnBlue.onclick = function(){
	var color = "#0089F4";
	changeColor(color);
	storeColor(color);
};
btnPurple.onclick = function(){
	var color = "#C7379F";
	changeColor(color);
	storeColor(color);
};
// 启动时读取本地存储颜色方案
window.onload = function(){
	var color = localStorage.getItem(strKey);
	changeColor(color);
};