<?php
	
	
	$files = $_FILES["upload"];
	
	if(count($files["name"])>0){
		echo "<br>" . "Upload cac tap tin da duoc chon";
		for($i=0; $i<count($files["name"]); $i++){
			if($files["name"][$i] != ""){
				echo "<br>" . $files["name"][$i];
				$destination = "../uploads/" . $files["name"][$i];
				move_uploaded_file($files["tmp_name"][$i],$destination);
			}
		}
	}


?>