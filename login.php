<?php
$errors[]="0";
// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'cpu');
// LOGIN USER
if (isset($_POST['login_user'])) {
  $username =$_POST['email'];
  $password =$_POST['pass'];

  	$query = "SELECT * FROM users WHERE email='$username' AND pass='$password'";
  	$results = mysqli_query($db, $query);
  	if (mysqli_num_rows($results) == 1) {
		session_start();
  	  $_SESSION['username'] = $username;
  	  $_SESSION['success'] ="You are now logged in";
  	  header('location: index.php');
  	}else {
  			header('location: login.html');
  	}
}

?>