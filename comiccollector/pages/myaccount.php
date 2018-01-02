<html>
	<head>
		<title>bwconner.com | Comic Collector</title>
		<?php include '../snippets/global.html';?>
		<link rel="stylesheet" type="text/css" href="../css/profile.css">
		<script type="text/javascript" src="../scripts/profile.js"></script>
	</head>
	<body class="my-account">
		<?php include '../snippets/header.html';?>
		<div class="site-body-wrapper">
			<div class="profile-wrapper" id="profile-update" action="">
				<div class="profile-image-wrapper">
					<img class="profile-image" src="" alt=""/>
					<button class="edit-image button">Edit Image</button>
					<button class="submit-image hide botton">Submit Image</button>
					<p class="edit-success hide">Your profile has been successfully updated!</p>
				</div>
				<div class="profile-information">
					<p class="username"></p>
					<div class="profile-field">
						<p class="profile-label">First Name:</p>
						<p class="first-name"></p>
					</div>
					<input id="firstname" type="text" name="firstname" class="firstname-field hide" placeholder="Enter New First Name"/>

					<div class="profile-field">
						<p class="profile-label">Favorite Character:</p>
						<p class="favorite-character"></p>
					</div>
					<input id="favorite-character" type="text" name="favoriteCharacter" class="favorite-character-field hide" placeholder="Enter New Favorite Character"/>
					
					<div class="profile-field">
						<p class="profile-label">About Me:</p>
						<p class="user-description"></p>
					</div>
					<input id="user-description" type="text" name="profileText" class="user-description-field hide" placeholder="Enter New Description"/>

					<button class="edit-profile button">Edit Profile</button>
					<button class="submit-edit hide button">Submit Profile</button>
					<p class="edit-success hide">Your profile has been successfully updated!</p>
				</div>
			</div>
		</div>
	</body>
</html>