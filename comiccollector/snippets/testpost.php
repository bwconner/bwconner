<?php
	//Sample Database Connection Syntax for PHP and MySQL.

	//Connect To Database
	$hostname="localhost";
	$username="bwconner_test";
	$password="dbtest123";
	$dbname="comic_collector";
	$usertable="user_profiles";
	$yourfield = "userName";


	$post_username= $_POST["username"];
	$post_password= $_POST["password"];
	$post_firstName= $_POST["firstname"];
	$post_userID= 12340909;
	$post_profileText= "";
	$post_favoriteCharacter= "";

	echo $post_username;
	echo $post_password;
	echo $post_firstName;
	echo $post_userID;


	$con = mysqli_connect($hostname,$username, $password) or die ("<html><script language='JavaScript'>alert('Unable to connect to database! Please try again later.'),history.go(-1)</script></html>");
	mysqli_select_db($con, $dbname);

	#Post Test
	$link = mysqli_connect($hostname,$username, $password, $dbname);
	$sql = "INSERT user_profiles (userID, userName, password, firstName, favoriteCharacter, profileText, profileImage)
	        VALUES ('".$post_userID."', '".$_POST["username"]."','".$_POST["password"]."','".$_POST["email"]."', '', 'http://bwconner.com/comiccollector/images/blankprofile.png')";
	mysqli_query($link, $sql);

	# Check If Record Exists
	$query = "SELECT * FROM $usertable";

	$result = mysqli_query($con, $query);
	
	if($result){
		while($row = mysqli_fetch_array($result)){
			$name = $row["$yourfield"];
			echo "Name: ".$name."<br/>";
		}
	}
?>
