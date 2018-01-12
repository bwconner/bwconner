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
			<div class="profile">
				<div class="profile__image-wrapper">
					<img class="profile__image" src="" alt=""/>
					<button class="edit-image button">Edit Image</button>
					<button class="submit-image hide botton">Submit Image</button>
					<p class="edit-success hide">Your profile has been successfully updated!</p>
				</div>
				<div class="profile__information">
					<p class="profile__username"></p>
					<div class="profile__field">
						<p class="profile-label">First Name:</p>
						<p class="profile__first-name"></p>
					</div>
					<input id="firstname" type="text" name="firstname" class="profile__first-name-field hide" placeholder="Enter New First Name"/>

					<div class="profile__field">
						<p class="profile__label">Favorite Character:</p>
						<p class="profile__favorite-character"></p>
					</div>
					<input id="favorite-character" type="text" name="favoriteCharacter" class="profile__favorite-character-field hide" placeholder="Enter New Favorite Character"/>
					
					<div class="profile-field">
						<p class="profile-label">About Me:</p>
						<p class="profile__user-description"></p>
					</div>
					<input id="user-description" type="text" name="profileText" class="profile__user-description-field hide" placeholder="Enter New Description"/>

					<button class="edit-profile button">Edit Profile</button>
					<button class="submit-edit hide button">Submit Profile</button>
					<p class="edit-success hide">Your profile has been successfully updated!</p>
				</div>
			</div>
			<p class="">Collection: </p>
			<div class="profile-collection-preview">
				<div  class="profile-comic">
					No comics added yet.
				</div>
			</div>
			<a href="" class="">View full collection...</a>
			<p class="">Wishlist: </p>
			<div class="profile-wishlist-preview">
				<div class="profile-comic">
					No comics added yet.
				</div>
			</div>
			<a href="" class="">View full wishlist...</a>
		</div>
	</body>
</html>