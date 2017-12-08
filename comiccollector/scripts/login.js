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
	var x= Math.floor(Math.random() * 90000000) + 10000000;
	alert(x);
	return x;
}

function createAccountAjax (newUserID) {
	var userCookieID = createNewToken();
	var data = $("#form").serialize() + "&userID=" + newUserID + "&cookieID=" + userCookieID;

	$.ajax({
		data: data,
		type: "post",
		url: "../snippets/createaccountsql.php",
		success: function(data){
			$(".create-account-wrapper_form form").addClass("hide");
			$(".create-account-wrapper .button").addClass("hide");
			$(".create-account-wrapper_success").removeClass("hide");
			var userSessionID = createNewToken();
			var userName = $('.username').val();
			createLoggedInCookie(newUserID, userName, userSessionID, userCookieID);
		}
	});
}

function checkLoggedInCookie (userID, userName, sessionID, cookieID) {
	//logged in cookie will hold userID, userName and cookieID.
	//All 4 must match to allow user to view and manipulate their profile.
}

function createLoggedInCookie (userID, userName, sessionToken, cookieToken) {
	//logged in cookie will hold userID, userName, sessionID and cookieID.
	//All 4 must match to allow user to view and manipulate their profile.
	var cookieName = "ccuid";
	var cookieValue = "userID=" + userID + "&userName=" + userName + "&sessionToken=" + sessionToken + "&cookieToken=" + cookieToken;
    var date = new Date();
    date.setTime(date.getTime() + (14 * 24 * 60 * 60 * 1000));
    var expires = "expires="+date.toUTCString();

	document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function parseUserCookie () {

}

$(document).ready(function() {

	$('.create-account').on('click', function() {
		
		var params = {
			username: $('.username').val(),
			password: $('.password').val(),
			email: $('.email').val()
		};

		//Sanitize Inputs
		var validInputs = validateInputs(params);

		if (validInputs) {
			createNewAccountID();
		}
		
	});

});

