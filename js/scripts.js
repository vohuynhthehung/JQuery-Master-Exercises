document.addEventListener("DOMContentLoaded", function(event) { 
	debugger;
	var locationArr = location.href.split('/');
	var activeWeek;
	locationArr.forEach(function(v){
		if(v.indexOf('week') > -1){
			activeWeek = v;
		}
	});
	var currWeek = 2;
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
});  