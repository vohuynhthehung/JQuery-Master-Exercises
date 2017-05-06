<?php
	$link = mysql_connect("localhost","root","");
	if(!$link){
		echo "Could not connect to mysql";
		exit;
	}
	
	if(!mysql_select_db("books",$link)){
		echo "Could not select database";
		exit;	
	}
	
	mysql_query("set names 'utf8'",$link);
?>