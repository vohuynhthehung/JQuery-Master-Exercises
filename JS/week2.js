window.onload = function(){
	document.onclick = function(){
		var e = event || window.event;
		var target = e.target != null? e.target:e.srcElement; 
		if(target.parentNode.id == "boxA"){
			target.style.width = target.offsetWidth + "px";
			target.style.backgroundColor = "#FFC";
			target.style.position = "absolute";
			move(target);
		}
	}

	function move(target){
		var $boxB = document.getElementById("boxB");
		 	bOL = boxB.offsetLeft,
			bOT = boxB.offsetTop,
			flying = true,
			moveSize = 5,
			tmp = bOL - parseFloat(target.offsetLeft);

			if(tmp < moveSize ){
				moveSize = tmp;
				flying = false;
			}

			target.style.top = parseFloat(target.offsetTop) + "px";
			target.style.left = parseFloat(target.offsetLeft) + moveSize + "px";

			if(flying){
				setTimeout(function(){ 
					move(target); 
				},10);
			} else {
				target.style.removeProperty("width");
				target.style.removeProperty("position");
				$boxB.appendChild(target);
			}	
	}

	var onMoving = false,
		xStart, yStart,
		xTarget, yTarget,
		_target;

	document.onmouseover = function(){
		var e = event || window.event;
		var target = e.target != null? e.target: e.srcElement;

		if(target.parentNode.id == "box"){
			target.style.cursor = "move"; 
		}
	} 

	document.onmousedown = function(){
		var e = event || window.event;
		var target = e.target != null? e.target: e.srcElement;
		if(target.parentNode.id == "box"){
			//debugger;
			target.style.position 	= "absolute";
			target.style.background 	= "red";
			target.style.left  	= target.offsetLeft;
			target.style.right  = target.offsetTop;

			_target = target;
			xStart = e.pageX;
			yStart = e.pageY;
			
			xTarget = target.offsetLeft;
			yTarget = target.offsetTop;
			onMoving = true; 
		}
	}

	document.onmousemove = function(){
		if(onMoving){
			var e = event || window.event;

			var xMove = e.pageX - xStart;
			var yMove = e.pageY - yStart;
			
			_target.style.left = xTarget + xMove + "px";
			_target.style.top = yTarget + yMove + "px";
				
		}
	}

	document.onmouseup = function(){
		onMoving = false;
	}
}  
