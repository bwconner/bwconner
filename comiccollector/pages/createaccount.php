<html>
	<head>
		<title>bwconner.com | Comic Collector</title>
		<?php include '../snippets/global.html';?>
		<link rel="stylesheet" type="text/css" href="../css/createAccount.css">
		<script type="text/javascript" src="../scripts/login.js"></script>
	</head>
	<body lang="en">
		<?php include '../snippets/header.html';?>
		<div class="site-body-wrapper">
			<div class="create-account-wrapper">
				<div class="create-account-wrapper_form">
					<div class="section-header">Create An Account</div>
					<form id="form" method="post" action="">
						<p class="input-label">Username:</p>
						<input id="username" type="text" name="username" class="username" placeholder="Enter a User Name"/>
						<p class="error username-error hide">Please enter a username.</p>
						<p class="input-label">Password:</p>
						<input id="password" type="text" name="password" class="password" placeholder="Enter a Password"/>
						<p class="error password-error hide">Please enter a password.</p>
						<p class="input-label">E-Mail:</p>
						<input id="email" type="text" name="email" class="email" placeholder="Enter an E-Mail"/>
						<p class="error email-error hide">Please enter a e-mail.</p>
					</form>
					<button class="create-account button">Create Account</button>
				</div>
				<div class="create-account-wrapper_benefits">
					<div class="section-header">Benefits of an account:</div>
					<div class="create-account-section">
						<ul>
							<li>
								Connect with friends.
							</li>
							<li>
								Manage your collection.
							</li>
							<li>
								Add comics to your wishlist.
							</li>
							<li>
								Discover new reads.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>