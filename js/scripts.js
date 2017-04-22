document.addEventListener("DOMContentLoaded", function(event) { 
	var locationArr = location.href.split('/');
	var activeWeek;
	locationArr.forEach(function(v){
		if(v.indexOf('week') > -1){
			activeWeek = v;
		}
	});
	var currWeek = 4;
	var ul=document.createElement('ul');
	ul.className = "week_list";
	for (var i=0; i<currWeek; i++){	 
		var li=document.createElement('li');
		li.className = "item";
	    var a=document.createElement('a');
	    var weekTarget = 'week' + (i+1);
	    var page = document.createTextNode(weekTarget);
	    a.appendChild(page);
	    a.href = '/JQuery-Master-Exercises/' + weekTarget;
	    li.appendChild(a)
	    if(weekTarget == activeWeek){
	    	li.className += " active";
	    }
	    ul.appendChild(li);
	}	    
	document.body.appendChild(ul)

	/*** Create Gototop ***/
	var gototop=document.createElement('span');
	gototop.id = "gototop";
	gototop.innerHTML = "Go Top";
	document.body.appendChild(gototop);

	document.getElementById("gototop").addEventListener("click", function(){
		while(document.body.scrollTop > 0){
			document.body.scrollTop -= 5;
			console.log(document.body.scrollTop);
		}
	})
});  