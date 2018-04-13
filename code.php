
<?php
require 'link.php';
//require 'api.php';



  if (isset($_POST['submit'])){
  $fname=addslashes($_POST['firstname']);
  $lname=addslashes($_POST['lastname']);
  $country=($_POST['country']);
  $phn=($_POST['phone']);
  $email=($_POST['email']);
  $uname=($_POST['user']);
  $pword=md5($_POST['password1']);
  $repword=md5($_POST['password2']);
  $currency=($_POST['currency']);
  


  $date = date('Y-m-d');

  $sql1="SELECT * FROM register WHERE username = '$uname'";
    $query=mysqli_query($connection, $sql1);


    if(filter_var($email, FILTER_VALIDATE_EMAIL) == false){

      echo "invalid email";

    }else if(mysqli_num_rows($query) > 0){

       echo "username taken"; 
      
    }else if($pword != $repword){

       echo "passwords dont match"; 
      
    }else{

  
  $sql="INSERT INTO `register`(`dateor`, `fname`, `lname`, `country`, `phn`, `email`, `username`, `password`, `currency`) VALUES ('$date','$fname','$lname','$country','$phn','$email','$uname','$pword','$currency');"; 


  $res = mysqli_multi_query($connection, $sql);
  if($res == 1){

        header('location:login.htm');   
      }else{
        echo mysqli_error($connection);

     }
}
}


if (isset($_POST['submit1'])){
	  $user=$_POST['user'];
	    $pword=md5($_POST['password']);



	    $sql="SELECT * FROM `register` WHERE `username`='".$user."' AND `password`='".$pword."'";
	      $res=mysqli_query($connection, $sql);
	      echo mysqli_error($connection);
	        if(mysqli_num_rows($res) == 1){
			    if(isset($_POST['remember'])){
				          setcookie('user', $user, time()+60*60*7);
					        setcookie('pword', $pword, time()+60*60*7);
					        }
			          session_start();
			          $_SESSION['user'] =$user;
				        //$_SESSION['time'] =time();
				       header('location:dash.php');
				            
				              }else{
				                        echo "Username or Password Incorect";
				  
				                            
				                              }
				                              }


?>
