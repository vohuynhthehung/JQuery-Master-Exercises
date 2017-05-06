<?php
	include("connection.php");
	
	
	$keyword 	= (string)$_POST["keywords"];
	$limit		= (int)$_POST["limit"];
	
	$sql = "SELECT `id`,`name` 
			FROM `products` 
			WHERE `status` = 1 
			AND `name` LIKE '%{$keyword}%' 
			ORDER BY `order` ASC, `name` ASC 
			LIMIT " . $limit;
	
	$result = mysql_query($sql,$link);
	$books = array();
	while($row = mysql_fetch_assoc($result)){
		$books[] = $row;	
	}
	
	
	$bookObj = json_encode($books);
	echo $bookObj;