<html>
	<head>
		<title>bwconner.com | Comic Collector</title>
		<?php include '../snippets/global.html';?>
		<link rel="stylesheet" type="text/css" href="../css/search.css">
		<script type="text/javascript" src="../libs/mustache.min.js"></script>
		<script type="text/javascript" src="../scripts/search.js"></script>
		<script type="text/javascript" src="../scripts/comic.js"></script>
	</head>
	<script type="text/html" id="result-template">
		<div class="search-result comic-{{comicId}}" data-title="{{title}}" data-image="{{image}}">
			<img class="result-img" src="{{image}}">
			<div class="result-information">
				<div class="result-title">{{title}}</div>
				<div class="result-creators">
				</div>
				<div class="button add-to-collection" data-comicid="{{comicId}}">Add to Collection</div>
				<div class="hide">Added Successfully!</div>
				<a href="/comiccollector/pages/viewcomicinfo?&comicId={{comicId}}">View Full Information</a>
			</div>
		</div>
	</script>
	<body lang="en">
		<?php include '../snippets/header.html';?>
		<div class="site-body-wrapper">
			<div class="search-body-wrapper">
				<div class="search-form">
					<div class="search-form_field-set">
						<p class="search-form-description">
							Search for a title that starts with or matches:
						</p>
						<input type="text" name="search-by-title" class="search-by-title" placeholder="Enter a Title to Search"/>
					</div>
					<div class="search-form_field-set">
						<p class="search-form-description">
							And/Or
						</p>
					</div>
					<div class="search-form_field-set">
						<p class="search-form-description">
							Search by a character name that starts with or matches:
						</p>
						<input type="text" name="search-by-character" class="search-by-character" placeholder="Enter a Character to Search"/>
					</div>
					<button class="search button">Search</button>
					<div class="advanced-search-options-show"> Show Advanced Search Options </div>
					<div class="advanced-search-options-wrapper"/>
						<div class="advanced-search-option">
							<div class="dropdown-label">
								Number of results to show:
							</div>
							<select name="limit" class="search-limit advanced-search-option_dropdown">
								<option value="24">24</option>
								<option value="48">48</option>
								<option value="72">72</option>
								<option value="96">96</option>
							</select>
						</div>
						<div class="advanced-search-option">
							<div class="dropdown-label">
								Format:
							</div>
							<select name="format" class="format advanced-search-option_dropdown">
								<option value="">Choose a Format</option>
								<option value="comic">Comic</option>
								<option value="digital comic">Digital Comic</option>
								<option value="trade paperback">Trade Paperback</option>
								<option value="graphic novel">Graphic Novel</option>
							</select>
						</div>
						<div class="advanced-search-option">
							<div class="dropdown-label">
								Sort By:
							</div>
							<select name="sort" class="sort advanced-search-option_dropdown">
								<option value="">Choose a Sorting</option>
								<option value="onsaleDate">On Sale Date - Ascending</option>
								<option value="-onsaleDate">On Sale Date - Descending</option>
								<option value="issueNumber">Issue Number - Ascending</option>
								<option value="-issueNumber">Issue Number - Descending</option>
								<option value="title">Title - Ascending</option>
								<option value="-title">Title - Descending</option>
							</select>
						</div>
					</div>
				</div>
				<div class="spinner hide"></div>
				<div class="results">

				</div>
				<div class="pagination hide">
					<div class="prev button hide">
						< Previous
					</div>
					<div class="pages">
					</div>
					<div class="next button">
						Next >
					</div>
				</div>
			</div>
		</div>
	</body>
</html>