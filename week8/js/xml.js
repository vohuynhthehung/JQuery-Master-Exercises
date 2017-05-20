// JavaScript Document
function loadFile(url, method, type){
	//Khoi tao đối tượng XMLHttpRequest			
	if(window.XMLHttpRequest){
		var xhttp = new XMLHttpRequest();	
	}else{ //ie5 - ie6
		var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
			
	//Xác định phương thức và tập tin chúng muốn lấy thông tin
	//Phương thức GET - POST
	 xhttp.open(method,url, false);
			
	//Gửi yêu cầu đến máy chủ
	xhttp.send();
			
	//Lấy nội dung trả về từ máy chủ
	if(type == "text"){
		var val = xhttp.responseText;
	}else{
		var val = xhttp.responseXML;
	}
	
	return val;
			
}


function getAttributeNode(node, attr){
	return node.getAttribute(attr);
}
		
function getNode(parent,tagName){
	return parent.getElementsByTagName(tagName)[0];
}
		
function getNodeValue(node){
	return node.childNodes[0].nodeValue;
}