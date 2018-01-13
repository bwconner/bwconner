<html>
	<head>
		<title>bwconner.com | Comic Collector</title>
		<?php include '../snippets/global.html';?>
		<link rel="stylesheet" type="text/css" href="../css/comicInfoPage.css">
		<script type="text/javascript" src="../libs/mustache.min.js"></script>
		<script type="text/javascript" src="../scripts/viewcomicinfo.js"></script>
		<script type="text/javascript" src="../scripts/comic.js"></script>
	</head>
	<script type="text/html" id="comic-template">
		<div class="comic comic-{{comicId}}" data-title="{{title}}" data-image="{{image}}">
			<img class="comic__image" src="{{image}}">
			<div class="comic-information">
				<div class="comic__title">{{title}}</div>
				<div class="comic__creators">{{creators}}</div>
				<div class="comic__add-to-collection button" data-comicid="{{comicId}}">Add to Collection</div>
				<div class="comic__add-to-wishlist button" data-comicid="{{comicId}}">Add to Wishlist</div>
				<div class="comic__added-succesfully hide">Added Successfully!</div>
				<div class="comic__characters">{{characters}}</div>
				<div class="comic__description">{{description}}</div>
			</div>
		</div>
	</script>
	<body lang="en">
		<?php include '../snippets/header.html';?>
		<div class="site-body-wrapper">

		</div>
	</body>
</html>