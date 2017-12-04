<html>
	<head>
		<title>bwconner.com | Comic Collector</title>
		<?php include '../snippets/global.html';?>
		<script type="text/javascript" src="../scripts/search.js"></script>
	</head>

	<body lang="en">
		<?php include '../snippets/header.html';?>

<?php
	//Sample Database Connection Syntax for PHP and MySQL.
	
	//Connect To Database
	$hostname="localhost";
	$username="bwconner_test";
	$password="dbtest123";
	$dbname="comic_collector";
	$usertable="user_profiles";
	$yourfield = "userName";

	$con = mysqli_connect($hostname,$username, $password) or die ("<html><script language='JavaScript'>alert('Unable to connect to database! Please try again later.'),history.go(-1)</script></html>");
	mysqli_select_db($con, $dbname);

	#Post Test
	$link = mysqli_connect($hostname,$username, $password, $dbname);
	$sql = "INSERT INTO user_profiles (userID, userName, password, firstName, favoriteCharacter, profileText) VALUES (23232323, 'pparker', 'pparker1', 'Peter', 'Spidey', 'I am not Spider-Man')";
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


		<div class="site-body-wrapper">
			<div class="main-content-section">
				<div class="main-content-section_subsection">
					<div class="main-content-section_subsection-header">Featured Post</div>
					<div class="main-content-section_subsection-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</div>
					<div class="main-content-section_subsection-img"></div>
				</div>
				<div class="main-content-section_subsection">
					<div class="main-content-section_subsection-header">Test Subsection 2</div>
					<div class="main-content-section_subsection-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere</div>
					<div class="main-content-section_subsection-img"></div>
				</div>
				<div class="main-content-section_subsection">
					<div class="main-content-section_subsection-header">Sub Section 3</div>
					<div class="main-content-section_subsection-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc</div>
					<div class="main-content-section_subsection-img"></div>
				</div>
			</div>
			<div class="search-form">
				<input type="text" name="search-text" class="search-text" placeholder="Enter a Search Term"/>
				<button class="search">Search</button>
				<div class="advanced-search-options-show"> Show Advanced Search Options </div>
				<div class="advanced-search-options-wrapper"/>
					<div class="advanced-search-option">
						<div class="dropdown-label">
							Search Limit:
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
				</div>
			</div>
			<div class="results">

			</div>
			<div class="pagination">
				<div class="prev button">
					< Previous
				</div>
				<div class="pages">
				</div>
				<div class="next button">
					Next >
				</div>
			</div>
		</div>
	</body>
</html>