// JavaScript Document
(function($){
	$.fn.zPaging = function(options){
		console.log("Hi zPaging");	
		debugger;
		//=============================================
		//Cac gia mac cua options
		//=============================================
		var defaults = {
				"rows"				: "#rows",
				"pages"				: "#pages",
				"items"				: 6,
				"height"			: 27,
				"currentPage"		: 1,
				"total"				: 0,
				"btnPrevious"		: ".goPrevious",
				"btnNext"			: ".goNext",
				"txtCurrentPage"	: "#currentPage",
				"pageInfo"			: ".pageInfo"
			};
		options = $.extend(defaults,options);
		
		//=============================================
		//Cac bien se su dung trong Plugin
		//=============================================
		var rows 			= $(options.rows);
		var pages 			= $(options.pages);
		var btnPrevious 	= $(options.btnPrevious);
		var btnNext 		= $(options.btnNext);
		var txtCurrentPage 	= $(options.txtCurrentPage);
		var lblPageInfo		= $(options.pageInfo);
		
		var aRows			= '';
		
		//=============================================
		//Khoi tao cac ham can thi khi Plugin duoc su dung
		//=============================================
		init();
		setRowsHeight();
		
		//=============================================
		//Ham khoi dong
		//=============================================
		function init(){
			//Lay tong so trang 
			$.ajax({
				url		: "files/getdata.php?type=count&items=" + options.items,
				type	: "GET",
				dataType: "json"
			}).done(function(data){
					
				options.total = data.total;
				console.log(options);
				pageInfo();
				loadData(options.currentPage);
			});
			
			//Gan su kien vao cho btnPrevious - btnNext - txtCurrentPage
			setCurrentPage(options.currentPage);
			
			btnPrevious.on("click",function(e){
				goPrevious();
				e.stopImmediatePropagation();
			});
			
			btnNext.on("click",function(e){
				goNext();
				e.stopImmediatePropagation();
			});
			
			txtCurrentPage.on("keyup",function(e){
				
				if(e.keyCode == 13){
					var currentPageValue = parseInt($(this).val());
					console.log(currentPageValue);	
					if(isNaN(currentPageValue) || currentPageValue <= 0 
									|| currentPageValue > options.total){
						alert("Gia tri nhap vao khong phu hop");
					}else{
						loadData(currentPageValue);
						options.currentPage = currentPageValue;
						pageInfo();
					}
				}
				
			});
			
			
			
		}
		
		//=============================================
		//Ham xu ly khi nhan vao nut btnPrevious
		//=============================================
		function goPrevious(){
			console.log("goPrevious: " + options.currentPage);
			if(options.currentPage != 1){
				var p = options.currentPage - 1;
				loadData(p);	
				setCurrentPage(p);
				options.currentPage = p;
				pageInfo();
			}
		}
		
		//=============================================
		//Ham xu ly khi nhan vao nut btnNext
		//=============================================
		function goNext(){
			console.log("goNext: " + options.currentPage);
			if(options.currentPage != options.total){
				var p = options.currentPage + 1;
				loadData(p);	
				setCurrentPage(p);
				options.currentPage = p;
				pageInfo();
			}
		}
		
		//=============================================
		//Ham xu ly gan gia tri vao 
		//trong o textbox currentPage
		//=============================================
		function setCurrentPage(value){
			txtCurrentPage.val(value);
		}
		
		//=============================================
		//Ham hien thi thong tin phan trang
		//=============================================
		function pageInfo(){
			lblPageInfo.text("Page " + options.currentPage + " of " + options.total);
		}
		
		//=============================================
		//Thiet lap chieu cao cho ul#rows
		//=============================================
		function setRowsHeight(){
			var ulHeight = (options.items * options.height) + "px";
			rows.css("height",ulHeight);
		}
		
		//=============================================
		//Ham load cac thong trong database va dua vao #row
		//=============================================
		function loadData(page){
			//console.log("loadData");
			debugger;
			$.ajax({
				url: "files/getdata.php?type=list",
				type: "POST",
				dataType: "json",
				cache: false,
				data: {
						"items"			: options.items,
						"currentPage"	: page
					}	
				
			}).done(function(data){
				//console.log(data);	
				if(data.length > 0){
					rows.empty();	
					
					$.each(data,function(i, val){
						var str = '<li item-id="' + val.id + '">' 
								   + val.id + ' - ' + val.name 
								   + '<a href="#" title="Xóa dòng này">delete</a>' 
								   + '</li>';
						rows.append(str);
					});
					
					//Lay tap hop cac the <a> nam ul#rows li
					aRows = options.rows + " li a";
					//console.log(aRows);
					$(aRows).on("click", function(e){						
						deleteItem(this);
					});
				}
			});
		}
		
		//=============================================
		//Xoa di mot dong trong #rows
		//=============================================
		function deleteItem(obj){
			var parent = $(obj).parent();
			var itemID = $(parent).attr("item-id");
			var lastID = $(rows).children(":last").attr("item-id");
			//console.log(lastID);
			//console.log(itemID);
			
			//An va xoa phan tu li duoc nhan
			$(parent).fadeOut({
				durarion: 300,
				done: function(){
						
						$.ajax({
							url: "files/getdata.php?type=delete&id=" + itemID,
							type: "GET",
							dataType:"json"
						});
						if(itemID == lastID && $(rows).children().length == 1 ){
							options.currentPage = options.currentPage - 1;
						}
						init();
						//pageInfo();
						$(this).remove();
					}
			});
			
			$.ajax({
				url: "files/getdata.php?type=one&id=" + lastID,
				type: "GET",
				dataType:"json"
			}).done(function(data){
				console.log(data);
				if(data != false){
					var str = '<li item-id="' + data.id + '">' 
									   + data.id + ' - ' + data.name 
									   + '<a href="#">Xoa</a>' 
									   + '</li>';
					str = $(str).hide().appendTo(rows);
					$(str).fadeIn(300);
				}
				
			});
			
		}
	}	
})(jQuery);

$(document).ready(function(e) {
    var obj = {'items' : 5};
	$("#paging").zPaging(obj);
});





