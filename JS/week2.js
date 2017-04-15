window.onload = function(){
	document.onclick = function(){
		var e = event || window.event;
		var target = e.target != null? e.target:e.srcElement; 
		if(target.parentNode.id == "boxA"){
			target.style.width = target.offsetWidth + "px";
			target.style.backgroundColor = "#FFC";
			target.style.position = "absolute";

		 	var endPos = {xB: boxB.offsetLeft, yB: boxB.offsetTop}
			move(target, endPos, 'right');
		} else{


			var square30 = document.getElementsByClassname("square30");
			square30.style.position = "absolute";
			move(square30);
		}
	}

	function move(flyElement, endPos , derection){
			var flying = true,
			moveSize = 5,
			tmp;

			switch (derection){				
				case 'left':
					tmp = parseFloat(flyElement.offsetLeft) - endPos.xB;
					break;
				case 'right':
					tmp = endPos.xB - parseFloat(flyElement.offsetLeft);
					break;
				case 'top':
					tmp = parseFloat(objHTML.style.top) - yStop;
					break;
				case 'bottom':
					tmp = yStop - parseFloat(objHTML.style.top);
					break;
			}

			if(tmp < moveSize ){
				moveSize = tmp;
				flying = false;
			}

			flyElement.style.top = parseFloat(flyElement.offsetTop) + "px";
			flyElement.style.left = parseFloat(flyElement.offsetLeft) + moveSize + "px";

			if(flying){
				setTimeout(function(){ 
					move(flyElement, endPos , derection); 
				},10);
			} else {
				flyElement.style.removeProperty("width");
				flyElement.style.removeProperty("position");
				boxB.appendChild(flyElement);
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
