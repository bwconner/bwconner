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
			<div class="profile-wrapper">
				<div class="profile-image-wrapper">
					<img class="profile-image" src="" alt=""/>
					<button class="edit-image">Edit Image</button>
					<button class="submit-image hide">Submit Image</button>
				</div>
				<div class="profile-information">
					<p class="username"></p>

					<p class="profile-label">First Name:</p>
					<p class="first-name"></p>
					<input id="login-username" type="text" name="username" class="username hide" placeholder="Enter New First Name"/>

					<p class="profile-label">Favorite Character:</p>
					<p class="favorite-character"></p>
					<input id="favorite-character" type="text" name="character" class="favorite-character hide" placeholder="Enter New Favorite Character"/>

					<p class="profile-label"></p>
					<p class="user-description"></p>
					<input id="user-description" type="text" name="description" class="user-description hide" placeholder="Enter New Description"/>

					<button class="edit-profile button">Edit Profile</button>
					<button class="submit-edit hide button">Submit Profile</button>
				</div>
			</div>
		</div>
	</body>
</html>