<?php
session_start();

// initializing variables
$email    = "";
$errors = array(); 

// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'cpu');

// REGISTER USER
if (isset($_POST['reg_user'])) {
  // receive all input values from the form
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
  	$query = "INSERT INTO users (email, pass)  VALUES('$email', '$password_1')";
  	if(mysqli_query($db, $query))
	{
  	$_SESSION['username'] = $email;
  	$_SESSION['success'] = "You are now logged in";
	header('location: index.php');
	}
	else
  	header('location: register.php');
  }


?>