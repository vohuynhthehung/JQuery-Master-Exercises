<?php
	include("connection.php");
	
	$type = (string)$_GET["type"];
	//=============================================
	//Lay tong so trang trong database
	//=============================================
	if($type == "count"){
		$items = (int)$_GET["items"];	
		
		$sql = 'SELECT COUNT(id) 
				FROM `products` 
				WHERE `status` = 1';
				
		$result 	= mysql_query($sql,$link);
		$totalItem 	= mysql_result($result,0);
		$pages 		= $totalItem/$items;
		
		$total 		= array("total"=>0);
		
		$tmp = explode(".",$pages);
		if(count($tmp)>1){
			$pages = $tmp[0] + 1;
		}else{
			$pages = $tmp[0];	
		}
		
		$total["total"] = $pages;		
		echo json_encode($total);
	}
	
	//=============================================
	//Lay cac phan tu tuong ung voi trang hien thoi
	//=============================================
	if($type == "list"){
		
		$items 			= (int)$_POST["items"];
		$currentPage 	= (int)$_POST["currentPage"];
		$offset			= ($currentPage - 1) * $items;
		//LIMIT offset, items
		//page: 1 => 0, 6
		//page: 2 => 6, 6		
		//page: 3 => 12, 6
		
		$sql = 'SELECT `id`, `name` 
				FROM `products` 
				WHERE `status` = 1 
				ORDER BY `id` ASC 
				LIMIT ' . $offset . ',' .$items;
		
		$result = mysql_query($sql,$link);
		$books = array();
		while($row = mysql_fetch_assoc($result)){
			$books[] = $row;	
		}
		/*echo "<pre>";
		print_r($books);
		echo "</pre>";*/
		echo json_encode($books);
		
	}
	
	//=============================================
	//Lay 1 phan tu dung sau ID cuoi cung
	//=============================================
	if($type == "one"){
		
		$lastID 		= (int)$_GET["id"];
		
		$sql = 'SELECT `id`, `name` 
				FROM `products` 
				WHERE `status` = 1 
				AND id > ' . $lastID . '
				ORDER BY `id` ASC 
				LIMIT 1';
		
		$result = mysql_query($sql,$link);
		$book = array();
		$book = mysql_fetch_assoc($result);
		echo json_encode($book);
		
	}
	
	//=============================================
	//Lay 1 phan tu dung sau ID cuoi cung
	//=============================================
	if($type == "delete"){
		
		$id = (int)$_GET["id"];
		
		$sql = 'DELETE FROM `products` WHERE id = ' . $id;
		
		$result = mysql_query($sql,$link);
	}
?>


















