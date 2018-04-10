<?php
	session_start();
	session_destroy();
	if(isset($_COOKIE['user'])){
		$user = $_COOKIE['user'];
		setcookie('user', $user, time()-1);
	}
	header('location:login.htm');

?>