// JavaScript Document
$(document).ready(function(e) {
		var cityObj, districtObj, wardObj;
		$.ajax({
				url: "files/getdata2.php",
				type: "POST",
				dataType: "json"
			}).done(function(data){
				console.log(data);	
				cityObj 	= data.cities;
				districtObj = data.district;
				wardObj 	= data.ward;
				addData("#city",cityObj,'--Select a City--','*');
			});		
		
		$("#city").change(function(e) {
            var cityID = $(this).find(":selected").val();
			console.log(cityID);
			addData("#district",districtObj,'--Select a District--',cityID);
        });
		
		$("#district").change(function(e) {
            var districtID = $(this).find(":selected").val();
			console.log(districtID);
			addData("#ward",wardObj,'--Select a Ward--',districtID);
        });
		
		
	});
	
function addData(selector, dataObj, text, parentID){
			//dataObj = {id,name}
			
			$(selector).empty();			
			$(selector).append('<option value="0">' + text + '</option>');
			if(parentID == '*'){
				var optObj = dataObj;
			}else if(parentID > 0){
				var optObj = dataObj[parentID];
			}
			
			
			if(optObj.length > 0){
				$.each(optObj,function(i,val){
					//console.log(val);
					var opt = '<option value="' + val.id + '">' + val.name + '</option>';
					$(selector).append(opt);
				});
			}
		}