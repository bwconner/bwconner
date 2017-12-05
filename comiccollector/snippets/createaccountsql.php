<?php

	//Connect To Database
	$hostname="localhost";
	$username="bwconner_test";
	$password="dbtest123";
	$dbname="comic_collector";
	$usertable="user_profiles";

	//Turn posted attributes into variables
	$post_username= $_POST["username"];
	$post_password= $_POST["password"];
	$post_email= $_POST["email"];
	$post_firstName= '';
	$post_userID= $_POST["userID"];
	$post_profileText= "";
	$post_favoriteCharacter= "";
	$post_favoriteCharacter= "";


	//Insert the new profile into the DB
	$link = mysqli_connect($hostname,$username, $password, $dbname);
	$sql = "INSERT user_profiles (userID, userName, password, email, firstName, favoriteCharacter, profileText, profileImage)
	        VALUES ('".$post_userID."', '".$post_username."','".$post_password."','".$post_email."', '', '', '', 'http://bwconner.com/comiccollector/images/blankprofile.png')";
	mysqli_query($link, $sql);
	mysqli_close($link);
?>
