<?php
	$connection = mysqli_connect('localhost', 'root', 'books');
	if (!$connection){
    	die("Database Connection Failed" . mysqli_error($connection));
	}else{
		echo "connected";
	}
	$select_db = mysqli_select_db($connection, 'ay');
	if (!$select_db){
    die("Database Selection Failed" . mysqli_error($connection));
	}

	function connect(){ 
		$db=new mysqli("localhost","root","","books");//philli 4:13
		return $db;

	}

?>
