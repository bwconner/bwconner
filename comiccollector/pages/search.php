<html>
	<head>
		<title>bwconner.com | Comic Collector</title>
		<?php include '../snippets/global.html';?>
		<link rel="stylesheet" type="text/css" href="../css/search.css">
		<script type="text/javascript" src="../scripts/search.js"></script>
	</head>
	<body lang="en">
		<?php include '../snippets/header.html';?>
		<div class="site-body-wrapper">
			<div class="search-body-wrapper">
				<div class="search-form">
					<input type="text" name="search-text" class="search-text" placeholder="Enter a Search Term"/>
					<button class="search">Search</button>
					<div class="advanced-search-options-show"> Show Advanced Search Options </div>
					<div class="advanced-search-options-wrapper"/>
						<div class="advanced-search-option">
							<div class="dropdown-label">
								Show:
							</div>
							<select name="Search Limit" class="search-limit">
								<option value="25">25</option>
								<option value="50">50</option>
								<option value="75">75</option>
								<option value="100">100</option>
							</select>
						</div>
						<div class="advanced-search-option">
							<div class="dropdown-label">
								Format:
							</div>
							<select name="Format" class="format">
								<option value="comic">Comic</option>
								<option value="digital Comic">Digital Comic</option>
								<option value="trade Paperback">Trade Paperback</option>
							</select>
						</div>
						<div class="advanced-search-option">
							<div class="dropdown-label">
								Sort By:
							</div>
							<select name="Format" class="format">
								<option value="comic">Comic</option>
								<option value="digital Comic">Digital Comic</option>
								<option value="trade Paperback">Trade Paperback</option>
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