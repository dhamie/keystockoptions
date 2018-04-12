<?php
	$connection = mysqli_connect('localhost', 'root', '');
	if (!$connection){
    	die("Database Connection Failed" . mysqli_error($connection));
	}else{
		//echo "connected";
	}
	$select_db = mysqli_select_db($connection, 'ay');
	if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
	}



?>