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
		url: "../phpscripts/uniqueusernamesql.php",
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
		url: "../phpscripts/uniqueuseridsql.php",
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
		url: "../phpscripts/createaccountsql.php",
		success: function(data){
			$(".create-account-wrapper_form form").addClass("hide");
			$(".create-account-wrapper .button").addClass("hide");
			$(".create-account-wrapper_success").removeClass("hide");
			var userSessionID = createNewToken();
			var userName = $('.create-account-form .username').val();
			var expireDate = getExpirationDate();
			updateUserSession(userName, userSessionID, expireDate, newUserID);
			createLoggedInCookie(userName, userSessionID, expireDate, newUserID, userCookieID);
		}
	});
}

function validateLogin () {
	var userCookieID = createNewToken();
	var data = $("#login-form").serialize();

	$.ajax({
		data: data,
		type: "post",
		url: "../phpscripts/loginsql.php",
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

	var data = "userID=" + userID + "&username=" + userName + "&userSessionID=" + userSessionID + "&expireDate=" + expireDate;

	$.ajax({
		data: data,
		type: "post",
		url: "../phpscripts/sessionupdatesql.php",
		success: function(data){
			//console.log("db updated");
		}
	});
}

//Create logged in cookie following an account login
function createLoggedInCookie (userName, userSessionID, expireDate, userID, cookieID) {
	//logged in cookie will hold userID, userName, sessionID and cookieID.
	//All 4 must match to allow user to view and manipulate their profile.
	var cookieName = "ccuid";
	var cookieValue = "userID=" + userID + "&username=" + userName + "&sessionID=" + userSessionID + "&cookieID=" + cookieID;
	document.cookie = cookieName + "=" + cookieValue + "; expires=" + expireDate + ";path=/";

	$("body").addClass("logged-in");
	$("body").attr("data-userid", userID);
	$(document).trigger('login-verified');
}

//Check if a logged in cookie exists
function checkForLoggedInCookie () {
	if (document.cookie.length > 0) {
		var cookieName = "ccuid";
		cookieStart = document.cookie.indexOf(cookieName + "=");
		if (cookieStart != -1) {
			cookieStart = cookieStart + cookieName.length + 1;
			cookieEnd = document.cookie.indexOf(";", cookieStart);
			if (cookieEnd == -1) {
				cookieEnd = document.cookie.length;
			}
			var cookieValue = unescape(document.cookie.substring(cookieStart, cookieEnd));
			verifyLoggedInCookie(cookieValue);
			//parseUserCookie(cookieValue);
		}
	}
}

//Parse the values out of the cookie
//May not even need this function
function parseUserCookie (cookieValue) {
	var cookieSplit = cookieValue.split("&");
	var userID = cookieSplit[0].split("=")[1];
	var username = cookieSplit[1].split("=")[1];
	var sessionID = cookieSplit[2].split("=")[1];
	var cookieID = cookieSplit[3].split("=")[1];
	
	$("body").addClass("logged-in");
	$("body").attr("data-userid", userID);
	$(document).trigger('login-verified');
	$(".account-link").attr("href", "/comiccollector/pages/myaccount.php");
}

//If a logged in cookie exists, check its validity 
function verifyLoggedInCookie (cookieValue) {
	$.ajax({
		data: cookieValue,
		type: "post",
		url: "../phpscripts/verifyloginsql.php",
		success: function(data){
			if (data == "true") {
				parseUserCookie(cookieValue);
			} else {
				console.log("login failed");
			}
		}
	});
}



//Create expiration date equal to 14 days from now
function getExpirationDate () {
	var date = new Date();
	date.setTime(date.getTime() + (14 * 24 * 60 * 60 * 1000));
	expireDate = date.toUTCString();
	return expireDate;
}

$(document).ready(function() {

	checkForLoggedInCookie();

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

