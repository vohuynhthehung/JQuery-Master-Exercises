<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
	include("connection.php");
	/*============================
	* Dua du lieu trong bang Cities vao mot mang
	*==============================*/
	
	$citySQL = "SELECT * 
				FROM `cities` 
				WHERE `status` = 1 
				ORDER BY `order` ASC, `name` ASC";
	$cityResult = mysql_query($citySQL,$link);
	//echo $cityResult;
	while($row = mysql_fetch_assoc($cityResult)){
		
		$cityArr[] = array('id' => $row['id'], 'name'=>$row['name']);
	}
	
	
	$cityObj = json_encode($cityArr);
	//echo $cityObj;
	
	/*============================
	* Dua du lieu trong bang District vao mot mang
	*==============================*/
	
	$districtSQL = "SELECT * 
				FROM `districts` 
				WHERE `status` = 1 
				ORDER BY `order` ASC, `name` ASC";
	$districtResult = mysql_query($districtSQL,$link);
	//echo $districtResult;
	while($row = mysql_fetch_assoc($districtResult)){
		//array = array(cityid => array(id, name))
		
		$districtArr[$row['cityid']][] = array('id' => $row['id'], 'name'=>$row['name']);
	}
	
	/*echo "<pre>";
	print_r($districtArr);
	echo '</pre>';*/
	
	$districtObj = json_encode($districtArr);
	//echo  $districObj;
	
	/*============================
	* Dua du lieu trong bang Ward vao mot mang
	*==============================*/
	
	$wardSQL = "SELECT * 
				FROM `ward` 
				WHERE `status` = 1 
				ORDER BY `order` ASC, `name` ASC";
	$wardResult = mysql_query($wardSQL,$link);
	//echo $districtResult;
	while($row = mysql_fetch_assoc($wardResult)){
		//array = array(cityid => array(id, name))
		
		$wardArr[$row['districtid']][] = array('id' => $row['id'], 'name'=>$row['name']);
	}
	
	/*echo "<pre>";
	print_r($districtArr);
	echo '</pre>';*/
	
	$wardObj = json_encode($wardArr);
	//echo  $wardObj;

?>