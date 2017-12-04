<html>
	<head>
		<title>bwconner.com | Comic Collector</title>
		<?php include '../snippets/global.html';?>
		<link rel="stylesheet" type="text/css" href="../css/login.css">
		<script type="text/javascript" src="../scripts/login.js"></script>
	</head>
	<body lang="en">
		<?php include '../snippets/header.html';?>
		<div class="site-body-wrapper">
			<div class="create-account-wrapper">
				<form id="form" method="post" action="">
					<input id="username" type="text" name="username" class="username" placeholder="Enter a User Name"/>
					<input id="password" type="text" name="password" class="password" placeholder="Enter a Password"/>
					<input id="firstname" type="text" name="firstname" class="firstname" placeholder="Enter a First Name"/>
					<input id="email" type="text" name="email" class="email" placeholder="Enter an E-Mail"/>
				</form>
				<button class="create-account">Create Account</button>
			</div>
		</div>
	</body>
</html>