// JavaScript Document
(function($){
	$.zAutocomplete = function(options){
		var defaults = {
				"keyword" 	: "#keywords",
				"results" 	: ".results",
				"mID"		: "#mID",
				"text"		: "Enter keyword here...",
				"minChar"	: 2,
				"records" 	: 5,
				"linkType"	: false
			};
		var options 	= $.extend(defaults,options);
		
		//Khai bao cac bien trong Plugin
		var txtKeyword 	= $(options.keyword);
		var results 	= $(options.results);
		var txtMID 		= $(options.mID);
		
		//Goi cac ham chay mac dinh trong Plugin
		addValue();
		//setResultPosition();
		
		txtKeyword.on('focus click',function(e){
			if($(this).val() == options.text){
				$(this).val('').css({color: '','font-style': ''});
			}
		});
		
		txtKeyword.on("blur", function(e){
				addValue();
				results.delay(200).slideUp(300);
		});
		
		txtKeyword.on("keyup", function(e){
			if($(this).val().length >= options.minChar){
				//console.log($(this).val());
				$.ajax({
					url		: "files/getdata.php",
					type	: "POST",
					dataType: "json",
					data	: {
								"keywords": $(this).val(),
								"limit": options.records
							}
					
				}).done(function(data){
					setResultPosition();
					var list = listItem(data);
					results.html(list);
					
					var selector = options.results + " ul li";
					//console.log($(selector));
					$(selector).on("mouseenter mouseleave",function(e){
						$(this).toggleClass("hover-bg");
					});
					
					if(options.linkType == false){
						$(selector).on("click", function(e){
							//console.log($(this).attr("item-id"));
							//console.log($(this).text());
							txtKeyword.val($(this).text());
							txtMID.val($(this).attr("item-id"));
							
						});
					}
					
				});
			}
		});
		
		function listItem(data){
			var str = '';
			str = "<ul>";
			if(data.length > 0){	
				$.each(data,function(i,val){
					var pTitle 	= val.name;
					var pLink 	= "product.php?id=" + val.id;
					var pID		= val.id;
					
					if(options.linkType == false){
						str += '<li item-id="' + pID + '" title="' + pTitle + '">' 
								+  pTitle + '</li>';
					}else{
						str += '<li title="' + pTitle + '">' 
								+ '<a href="' + pLink + '">' +  pTitle + '</a>' 
								+ '</li>';
					}
				});
			}else{
				str += '<li>No records</li>';
			}
			
			str += "</ul>";
			return str;
		}
		
		
		function setResultPosition(){
			//console.log(txtKeyword.offset());	
			results.css({
					left	: txtKeyword.offset().left,
					top		: txtKeyword.offset().top + txtKeyword.outerHeight(),
					width	: txtKeyword.innerWidth(),
					position: "absolute",
					display : "block"
					
				});
		}
		
		function addValue(){
			if(txtKeyword.val() == ''){
				txtKeyword.val(options.text).css({color: "#999","font-style":"italic"});
			}
		}
	}
	
})(jQuery);

$(document).ready(function(e) {
	var obj = {
			"linkType" : false
		};
    $.zAutocomplete(obj);
});