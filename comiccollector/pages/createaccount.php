<html>
	<head>
		<title>bwconner.com | Comic Collector</title>
		<?php include '../snippets/global.html';?>
		<link rel="stylesheet" type="text/css" href="../css/createAccount.css">
	</head>
	<body lang="en">
		<?php include '../snippets/header.html';?>
		<div class="site-body-wrapper">
			<div class="login-account-wrapper hide">
				<div class="login-account-wrapper_form">
					<div class="section-header">Login</div>
					<form class="login-account-form" id="create-account-form" method="post" action="">
						<p class="input-label">Username:</p>
						<input id="username" type="text" name="username" class="username" placeholder="Enter a User Name"/>
						<p class="input-label">Password:</p>
						<input id="password" type="text" name="password" class="password" placeholder="Enter a Password"/>
						<p class="error login-error hide">Please enter valid login credentials.</p>
					</form>
					<button class="login-account button">Login</button>
				</div>
				<div class="login-account-wrapper_benefits">
					<div class="login-account-section">
						<img src="../images/thecollectorMCU.png"/>
					</div>
				</div>
				<div class="login-account-wrapper_create-account">
					<p class="">Need an account? </p><p class="click-to-create">Click here to create an account.</p>
				</div>
			</div>
			<div class="create-account-wrapper">
				<div class="create-account-wrapper_form">
					<div class="section-header">Create An Account</div>
					<form class="create-account-form" id="create-account-form" method="post" action="">
						<p class="input-label">Username:</p>
						<input id="username" type="text" name="username" class="username" placeholder="Enter a User Name"/>
						<p class="error username-error hide">Please enter a user name between 3 and 16 characters long.</p>
						<p class="input-label">Password:</p>
						<input id="password" type="text" name="password" class="password" placeholder="Enter a Password"/>
						<p class="error password-error hide">Please enter a user name between 8 and 16 characters long. Your password must contain at least one letter, one number and one special character.</p>
						<p class="input-label">E-Mail:</p>
						<input id="email" type="text" name="email" class="email" placeholder="Enter an E-Mail"/>
						<p class="error email-error hide">Please enter a valid e-mail address.</p>
					</form>
					<button class="create-account button">Create Account</button>
					<div class="create-account-wrapper_success hide">
						<p>You have succesfully created an account! Please <a href="/comiccollector/pages/myaccount.php">click here</a> to visit and further customize your profile.</p>
					</div>
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
				<div class="create-account-wrapper_login">
					<p class="">Already have an account? </p><p class="click-to-login">Click here to login.</p>
				</div>
			</div>
		</div>
	</body>
</html>