function validateInputs (params) {
	var valid = true;
	$(".error").addClass("hide");

	if ((params.username).length <= 2 || (params.username).length > 16) {
		$(".username-error").removeClass("hide");
		valid = false;
	}

	//checkUniqueUserName(params.username);

	if ((params.password).length < 8 || (params.password).length > 16) {
		$(".password-error").removeClass("hide");
		valid = false;
	}

	//if ((params.password).index("@") < 0 || (params.password).length > 16) {
	//	$(".username-error").removeClass("hide");
	//	valid = false;
	//}

	if ((params.email).length <= 4 ||(params.email).indexOf("@") <= 0  || (params.email).indexOf(".") <= 0) {
		$(".email-error").removeClass("hide");
		valid = false;
	}

	return valid;
}


function checkUniqueUserName (username) {
	var data = "uniquename=" + username;

	 $.ajax({
		data: data,
		type: "post",
		url: "../snippets/uniqueusernamesql.php",
		success: function(data){
			if (data === "true") {
				return "true";
			} else {
				return "false";
			}

		}
	});
}

function createNewAccountID () {
	var uniqueNumber = createNewToken();
	var data = "uniqueid=" + uniqueNumber;

	 $.ajax({
		data: data,
		type: "post",
		url: "../snippets/uniqueuseridsql.php",
		success: function(data){
			if (data === "true") {
				createAccountAjax(uniqueNumber);
			} else {
				createNewAccountID();		
			}

		}
	});
}

function createNewToken () {
	return Math.floor(Math.random() * 90000000) + 10000000;
}

function createAccountAjax (newUserID) {
	var userCookieID = createNewToken();
	var data = $("#create-account-form").serialize() + "&userID=" + newUserID + "&cookieID=" + userCookieID;

	$.ajax({
		data: data,
		type: "post",
		url: "../snippets/createaccountsql.php",
		success: function(data){
			$(".create-account-wrapper_form form").addClass("hide");
			$(".create-account-wrapper .button").addClass("hide");
			$(".create-account-wrapper_success").removeClass("hide");
			var userSessionID = createNewToken();
			var userName = $('.create-account-form .username').val();
			var expireDate = getExpirationDate();
			updateUserSession(userName, userSessionID, expireDate, newUserID);
			createLoggedInCookie(userName, userSessionID, expireDate, userID, cookieID);
		}
	});
}

function validateLogin () {
	var userCookieID = createNewToken();
	var data = $("#login-form").serialize();

	$.ajax({
		data: data,
		type: "post",
		url: "../snippets/loginsql.php",
		success: function(data){
			var userName = $('.login-form .username').val();
			var userSessionID = createNewToken();
			var expireDate = getExpirationDate();
			var dataSplit = data.split("&");
			var userID = dataSplit[0].split("=")[1];
			var cookieID = dataSplit[1].split("=")[1];

			updateUserSession(userName, userSessionID, expireDate, userID);
			createLoggedInCookie(userName, userSessionID, expireDate, userID, cookieID);
		}
	});	
}

function updateUserSession (userName, userSessionID, expireDate, userID) {

	var data = "userID=" + userName + "&userName=" + userName + "userSessionID=" + userSessionID + "&expireDate=" + expireDate;

	$.ajax({
		data: data,
		type: "post",
		url: "../snippets/sessionupdatesql.php",
		success: function(data){
			console.log("db updated");
		}
	});
}

//Create logged in cookie following an account login
function createLoggedInCookie (userName, userSessionID, expireDate, userID, cookieID) {
	//logged in cookie will hold userID, userName, sessionID and cookieID.
	//All 4 must match to allow user to view and manipulate their profile.
	var cookieName = "ccuid";
	var cookieValue = "userID=" + userID + "&userName=" + userName + "&sessionToken=" + userSessionID + "&cookieToken=" + cookieToken;
	document.cookie = cookieName + "=" + cookieValue + "; expires=" + expireDate + ";path=/";
}

//Check if a logged in cookie exists
function checkForLoggedInCookie () {

}

//If a logged in cookie exists, check its validity 
function verifyLoggedInCookie () {

}

//Parse the values out of the cookie
function parseUserCookie () {

}

//Create expiration date equal to 14 days from now
function getExpirationDate () {
	var date = new Date();
	date.setTime(date.getTime() + (14 * 24 * 60 * 60 * 1000));
	expireDate = date.toUTCString();
	return expireDate;
}

$(document).ready(function() {

	$('.create-account').on('click', function() {
		var params = {
			username: $('.create-account-form .username').val(),
			password: $('.create-account-form .password').val(),
			email: $('.create-account-form .email').val()
		};

		//Sanitize Inputs
		var validInputs = validateInputs(params);

		if (validInputs) {
			createNewAccountID();
		}
		
	});

	$('.login').on('click', function() {
		validateLogin();
	});

});

