document.addEventListener("DOMContentLoaded", function(event) { 
	var $addFile = document.getElementById("addFile"),
		$moveL = document.getElementById("moveL"),
		$moveR = document.getElementById("moveR");
	$addFile.addEventListener("click", function(){
		var fileItem = this.parentNode.childNodes[1].cloneNode(true);
		var frmUpload = document.getElementById("uploadForm");
		frmUpload.insertBefore(fileItem,$addFile);
	})

	$moveR.addEventListener("click", function(){
		var $boxA = document.getElementById("boxA"),
		$boxB = document.getElementById("boxB");
		if($boxA.firstChild.nodeName == "#text"){
			$boxA.removeChild($boxA.firstChild);
		}
		var firstNode = $boxA.firstChild;
		$boxB.appendChild(firstNode);
	})

	$moveL.addEventListener("click", function(){
		var $boxA = document.getElementById("boxA"),
		$boxB = document.getElementById("boxB");
		var lastNode = $boxB.lastChild;
		var firstNodeBoxA = $boxA.firstChild;
		$boxB.removeChild(lastNode);
		$boxA.insertBefore(lastNode,firstNodeBoxA);
	})
});
