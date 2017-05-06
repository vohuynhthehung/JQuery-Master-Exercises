<?php
	$link = mysql_connect("localhost","root","");
	if(!$link){
		echo "Could not connect to mysql 11";
		exit;
	}
	
	if(!mysql_select_db("location",$link)){
		echo "Could not select database 22";
		exit;	
	}
	
	mysql_query("set names 'utf8'",$link);
?>