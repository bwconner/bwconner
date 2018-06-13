<html>
	<head>
		<title>bwconner.com | Comic Collector</title>
		<?php include '../snippets/global.html';?>
		<link rel="stylesheet" type="text/css" href="../css/collection.css">
		<script type="text/javascript" src="../libs/mustache.min.js"></script>
		<script type="text/javascript" src="../scripts/collection.js"></script>
		<script type="text/javascript" src="../scripts/comic.js"></script>
	</head>
	<script type="text/html" id="comic-template">
		<div class="comic comic-{{comicId}}" data-title="{{title}}" data-image="{{image}}">
			<img class="comic__image" src="{{image}}">
			<div class="comic__information">
				<div class="comic__title">{{title}}</div>
				<div class="comic__remove-from-collection button" data-comicid="{{comicId}}">Remove from Collection</div>
			</div>
		</div>
	</script>
	<body>
		<?php include '../snippets/header.html';?>
		<div class="site-body-wrapper">
			<p class="collection-header">Collection: </p>
			<div class="collection">
			</div>
		</div>
	</body>
</html>