<?php require_once("files/getdata.php"); ?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="cache-control" content="no-cache" />
<title>Multi Selectbox example</title>
<link rel="stylesheet" type="text/css" href="../css/style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
 <script src="../js/scripts.js" type="text/javascript"></script>
<script src="js/cities.js"></script>
<script type="text/javascript">
	$(document).ready(function(e) {
		var cityObj = $.parseJSON('<?php echo $cityObj;?>');
		var districtObj = $.parseJSON('<?php echo $districtObj;?>');
		var wardObj = $.parseJSON('<?php echo $wardObj;?>');
		//console.log(districtObj);
		
		addData("#city",cityObj,'--Select a City--','*');
		
		
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
	});
</script>
</head>

<body>
<div class="wrapper">
        <div id="content">
        	<div class="title">Selectbox</div>
            <div class="view_box">             
             <form name="appForm" id="appForm" method="POST" action="test.php"><label>City: </label>
             	<div class="item margin-btm20">
                	
                    <select name="city" id="city" class="input w200">
                    	<option value="0">-- Select a city -- </option>
                    </select>
                </div><label>District: </label>
                <div class="item margin-btm20">
                	
                    <select name="district" id="district" class="input w200">
                    	<option value="0">-- Select a District -- </option>
                    </select>
                </div><label>Ward: </label>
                <div class="item margin-btm20">
                	
                    <select name="ward" id="ward" class="input w200">
                    	<option value="0">-- Select a Ward -- </option>
                    </select>
                </div>
             </form>
            </div>
        </div>
    </div>
</body>
</html>
